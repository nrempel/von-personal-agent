import json
import os
import logging

from aiohttp import web


logging.getLogger()
LOGGER = logging.getLogger(__name__)

PORT = os.environ.get("PORT")

APP = web.Application()
ROUTES = web.RouteTableDef()


@ROUTES.get("/")
async def index(request):
    return web.FileResponse("app/www/index.html")


if __name__ == "__main__":
    APP.add_routes(ROUTES)
    LOGGER.info("Running webserver...")
    web.run_app(APP, host="0.0.0.0", port=PORT)

