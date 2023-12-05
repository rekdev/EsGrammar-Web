import json

from flask import Flask, jsonify
from flask_cors import CORS
from esgrammar import Syllable
import esgrammar

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def welcome():
    return jsonify("Welcome to EsGrammar API")


@app.route("/syllable/<word>", methods=["GET"])
def get_syllable(word):
    slb = Syllable(word)
    return jsonify(slb.get())


@app.route("/analyze/<words>", methods=["GET"])
def analyze(words):
    words = json.loads(words)
    words_analyzed = esgrammar.analyze(words)
    return jsonify(words_analyzed)
