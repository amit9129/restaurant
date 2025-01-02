from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample menu data
MENU = {
    "Indian": [
        {"name": "Palak Paneer", "price": 50},
        {"name": "Pakora", "price": 70},
        {"name": "Daal Makhani", "price": 80}
    ],
    "Chinese": [
        {"name": "Chowmein", "price": 150},
        {"name": "Dosa", "price": 100},
        {"name": "Fried Rice", "price": 350}
    ],
    "Italian": [
        {"name": "Pizza", "price": 250},
        {"name": "Pasta", "price": 200},
        {"name": "Sea Food", "price": 90}
    ]
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu/<cuisine>', methods=['GET'])
def get_menu(cuisine):
    return jsonify(MENU.get(cuisine, []))

if __name__ == '__main__':
    app.run(debug=True)
