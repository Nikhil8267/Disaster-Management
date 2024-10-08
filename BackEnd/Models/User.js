const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    contactNumber: { 
        type: String,
        required: true
    },
    location: { 
        type: String,
        required: true
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
