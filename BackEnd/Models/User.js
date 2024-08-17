const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    contactNumber: { 
        type: String 
    },
    location: { 
        type: String 
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
