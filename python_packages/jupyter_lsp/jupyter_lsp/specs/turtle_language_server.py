from .utils import NodeModuleSpec

REPO = (
    "https://github.com/stardog-union/stardog-language-servers/tree/master/packages/{}"
)


class TurtleLanguageServer(NodeModuleSpec):
    """Supports rdf turtle serialization"""

    node_module = key = "turtle-language-server"
    script = ["dist", "cli.js"]
    languages = [
        "turtle",
    ]
    args = ["--stdio"]
    spec = dict(
        display_name=key,
        mime_types=[
            "text/turtle",
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
