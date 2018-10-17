import os
import platform

import logging

logging.basicConfig(level=os.getenv("LOG_LEVEL", logging.INFO))
LOGGER = logging.getLogger(__name__)


def get_genesis_path():
    if platform.system() == "Windows":
        txn_path = os.path.realpath("./genesis")
    else:
        txn_path = "/home/indy/genesis"
    txn_path = os.getenv("INDY_GENESIS_PATH", txn_path)
    return txn_path


def get_wallet_config(wallet_seed, wallet_id=None, access_creds=None, wallet_name="personal-agent-wallet"):
    return {
        "id": wallet_id,
        "name": wallet_name,
        "seed": wallet_seed,
        "access_creds": access_creds,
        
    }
