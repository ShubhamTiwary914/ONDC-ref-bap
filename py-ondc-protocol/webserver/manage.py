import os
from flask import g
from main import create_app


app = create_app(os.getenv("ENV") or "dev")


@app.before_request
def before_request():
    g.data = []



if __name__ == "__main__":
    print("\n\n\n\n\n")
    print(app.url_map)
    print("\n\n\n\n\n")
    if os.getenv("ENV") is not None:
        # flask_s3.create_all(app)
        app.run(host="0.0.0.0", port=app.config["PORT"])
