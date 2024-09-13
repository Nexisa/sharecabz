const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String , required: true },
    phone: { type: String, required: true, unique: true},
    email: { type: String , required: true, unique: true },
    password: { type: String , required: true },
    token: { type: String },
    image: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);