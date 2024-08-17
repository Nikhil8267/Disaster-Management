const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    resourceId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    type: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    location: { 
        type: String 
    },
    status: { 
        type: String, 
        default: 'Available' 
    },
    assignedTo: { 
        
    }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource
