from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

from config import Config
from models import db
from models.user import User
from routes.auth_routes import auth_bp

app = Flask(__name__)
app.config.from_object(Config)

# Extensions
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
CORS(app)

# Register Blueprints
app.register_blueprint(auth_bp)

@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "MediVault Backend is running 🚀"
    })

@app.route("/api/health")
def health():
    return jsonify({
        "success": True,
        "message": "API is healthy"
    })

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, host="0.0.0.0", port=5000)