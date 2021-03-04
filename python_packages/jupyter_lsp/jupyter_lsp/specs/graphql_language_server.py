from .utils import NodeModuleSpec

REPO = (
    "https://github.com/stardog-union/stardog-language-servers/tree/master/packages/{}"
)


class GRAPHQLLanguageServer(NodeModuleSpec):
    """Supports GRAPHQL language"""

    node_module = key = "stardog-graphql-language-server"
    script = ["dist", "cli.js"]
    languages = [
        "graphql",
    ]
    args = ["--stdio"]
    spec = dict(
        display_name="graphql-language-server",
        mime_types=[
            "application/graphql",
        ],
        urls=dict(
            home=REPO.format(key),
            issues="https://github.com/stardog-union/stardog-language-servers/issues",
        ),
        install=dict(
            npm="npm install --save-dev {}".format(key),
            yarn="yarn add --dev {}".format(key),
            jlpm="jlpm add --dev {}".format(key),
        ),
    )
