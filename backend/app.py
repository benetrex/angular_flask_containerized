from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def root():
    return jsonify({"Hello": "From Flask backend"})

def create_app():
    CORS(app, resources={r"/*": {"origins": "*"}})
    return app