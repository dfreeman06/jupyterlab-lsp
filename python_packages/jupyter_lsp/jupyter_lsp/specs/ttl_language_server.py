from .config import load_config_schema
from .utils import NodeModuleSpec


class TTLLanguageServer(NodeModuleSpec):
    """Supports rdf turtle serialization"""

    node_module = key = "turtle-language-server"
    script = ["dist", "cli.js"]
    languages = [
        "ttl",
    ]
    args = ["--stdio"]
    spec = dict(
        display_name=key,
        mime_types=[
            "application/ttl",
            "text/ttl",
            "text/x-ttl",
        ],
        urls=dict(
            home="https://github.com/stardog-union/stardog-language-servers/tree/master/packages/{}".format(key),
            issues="https://github.com/stardog-union/stardog-language-servers/issues",
        ),
        install=dict(
            npm="npm install --save-dev {}".format(key),
            yarn="yarn add --dev {}".format(key),
            jlpm="jlpm add --dev {}".format(key),
        ),
        # config_schema=load_config_schema(key),
    )
