from models import db

class OTPLog(db.Model):
    __tablename__ = "otp_logs"

    id = db.Column(db.Integer, primary_key=True)