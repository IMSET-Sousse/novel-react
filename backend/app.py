from flask import Flask, jsonify
from flask_cors import CORS # type: ignore
import mysql.connector # type: ignore

app = Flask(__name__)
CORS(app)

# Database configuration (update with your XAMPP MySQL settings)
db_config = {
    'user': 'root',  # Your MySQL username
    'password': '',  # Your MySQL password
    'host': '127.0.0.1',  # Localhost (XAMPP default)
    'database': 'novel',  # Replace with your database name
}

# Fetch characters from the database
@app.route('/api/characters', methods=['GET'])
def get_characters():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)  # Use dictionary=True for column names as keys

        query = "SELECT name, true-name, age, status, rank, class, aspect, flaw, image FROM characters"
        cursor.execute(query)
        characters = cursor.fetchall()

        cursor.close()
        conn.close()

        return jsonify(characters)  # Return the characters as JSON
    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

if __name__ == '__main__':
    app.run(debug=True)
