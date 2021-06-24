from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def root():
    return jsonify({"message": "This is a message from the Flask backend!"})

def create_app():
    CORS(app, resources={r"/*": {"origins": "*"}})
    return app