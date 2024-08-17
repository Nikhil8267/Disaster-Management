const mongoose = require("mongoose");


const alertSchema = new mongoose.Schema({
    alertId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    incidentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'DisasterIncident' 
    },
    message: { 
        type: String, 
        required: true 
    },
    recipients: [{ 
        
    }],
    timestamp: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type: String, 
        default: 'Sent' 
    }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;