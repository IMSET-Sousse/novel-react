from flask import Flask, jsonify

app = Flask(__name__)

# Sample character data
characters = [
    {
        "name": "Sunless",
        "true_name": "Lost From Light",
        "age": "26(current)",
        "status": "Alive",
        "rank": "Saint(Transcendent)",
        "class": "Terror",
        "aspect": "Divine",
        "flaw": "Clear Conscience",
        "image": "/assets/sunny_illustration.png"
    },
    {
        "name": "Nephis",
        "true_name": "Changing Star",
        "age": "26(current)",
        "status": "Alive",
        "rank": "Saint(Transcendent)",
        "class": "Titan",
        "aspect": "Divine",
        "flaw": "Pristine Soul",
        "image": "/assets/nephis_illustration.png"
    },
    {
        "name": "Cassia",
        "true_name": "Song of the Fallen",
        "age": "26(current)",
        "status": "Alive",
        "rank": "Saint(Transcendent)",
        "class": "――",
        "aspect": "Sacred",
        "flaw": "Blindness",
        "image": "/assets/cassie_illustration.png"
    },
    {
        "name": "Athena",
        "true_name": "Raised by Wolves",
        "age": "28(current)",
        "status": "Alive",
        "rank": "Saint(Transcendent)",
        "class": "――",
        "aspect": "Transcendent",
        "flaw": "Glutton",
        "image": "/assets/effie_illustration.png"
    },
    {
        "name": "Jet",
        "true_name": "――",
        "age": "35(current)",
        "status": "Active",
        "rank": "Saint(Transcendent)",
        "class": "――",
        "aspect": "Supreme",
        "flaw": "You are dead",
        "image": "/assets/jet_illustration.png"
    },
    {
        "name": "Kai",
        "true_name": "Nightingale",
        "age": "28(current)",
        "status": "Alive",
        "rank": "Saint(Transcendent)",
        "class": "――",
        "aspect": "Ascended",
        "flaw": "Lie Sense",
        "image": "/assets/kai_illustration.png"
    },
    {
        "name": "Mordret",
        "true_name": "――",
        "age": "30(current)",
        "status": "Alive",
        "rank": "Saint(Transcendent)",
        "class": "Titan",
        "aspect": "Divine",
        "flaw": "――",
        "image": "/assets/mordret_illustration.png"
    },
]

@app.route('/api/characters', methods=['GET'])
def get_characters():
    return jsonify(characters)

if __name__ == '__main__':
    app.run(debug=True)
