const mongoose = require("mongoose");


const reportSchema = new mongoose.Schema({
    reportId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    incidentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'DisasterIncident' 
    },
    generatedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    },
    content: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String 
    }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;