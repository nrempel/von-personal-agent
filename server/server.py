import json
import os
import logging

from hashlib import md5

from aiohttp import web
import aiohttp_cors

from vonx.indy.manager import IndyManager
from vonx.indy.errors import IndyClientError

from indy_config import get_genesis_path, get_wallet_config

logging.basicConfig(level=os.getenv("LOG_LEVEL", logging.INFO))
LOGGER = logging.getLogger(__name__)

PORT = os.environ.get("PORT")

APP = web.Application()
ROUTES = web.RouteTableDef()

INDY_MANAGER = None

INDY_CONFIG = {
    "INDY_GENESIS_PATH": get_genesis_path(),
    "INDY_LEDGER_URL": os.environ.get("LEDGER_URL"),
    "INDY_GENESIS_URL": os.environ.get("GENESIS_URL"),
    "LEDGER_PROTOCOL_VERSION": os.environ.get("LEDGER_PROTOCOL_VERSION"),
}


async def get_client():
    global INDY_MANAGER
    if not INDY_MANAGER:
        INDY_MANAGER = IndyManager(INDY_CONFIG)
        INDY_MANAGER.start()

    client = INDY_MANAGER.get_client()
    return client


def build_failure_response(message=None):
    resp = {"success": False}
    if message:
        resp["message"] = message
    return web.json_response(resp)


@ROUTES.get("/")
async def index(request):
    return web.json_response({"success": True})


@ROUTES.post("/login")
async def login(request):

    try:
        data = await request.json()
    except Exception as e:
        return build_failure_response(str(e))

    try:
        username = str(data["username"])
    except KeyError:
        return build_failure_response("username must be provided")

    userhash = md5(username.encode("utf-8")).hexdigest()

    client = await get_client()

    wallet_config = get_wallet_config(
        userhash, wallet_id=userhash, wallet_name=userhash
    )

    LOGGER.info("Registering holder service...")
    try:
        holder = await client.get_agent_status(username)
    except IndyClientError:

        holder_wallet_id = await client.register_wallet(wallet_config)

        LOGGER.info(f"Indy holder wallet id: {holder_wallet_id}")
        await client.register_holder(
            holder_wallet_id, {"id": username, "name": username}
        )

        await client.sync()

        holder = await client.get_agent_status(username)

    return web.json_response({"success": True, "did": holder["did"]})


async def boot(app):
    LOGGER.info("Starting IndyManager...")


if __name__ == "__main__":
    APP.add_routes(ROUTES)
    APP.on_startup.append(boot)

    # Disable CORS on all routes.
    cors = aiohttp_cors.setup(
        APP,
        defaults={
            "*": aiohttp_cors.ResourceOptions(
                allow_credentials=True, expose_headers="*", allow_headers="*"
            )
        },
    )

    for route in list(APP.router.routes()):
        cors.add(route)

    LOGGER.info("Running webserver...")
    web.run_app(APP, host="0.0.0.0", port=7000)

