const mongoose = require("mongoose");


const disasterSchema = new mongoose.Schema({
    incidentId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    type: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    severity: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    reportedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    status: { 
        type: String, 
        default: 'Ongoing' 
    }
});

const DisasterIncident = mongoose.model('DisasterIncident', disasterSchema);

module.exports = DisasterIncident