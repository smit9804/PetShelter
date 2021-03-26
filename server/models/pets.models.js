const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Pet Name is required."],
        minlength: [3, "Name must be 3 character or longer."],
        unique: [true]
    },

    type: {
        type: String,
        required: [true, "Pet Type is required."],
        minlength: [3, "Type must be 3 character or longer."]
    },

    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [3, "Description must be 3 characters or longer."]
    },

    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },

    skill3: {
        type: String,
    },
    
    like: {
        type: Number,
    }

});

PetSchema.plugin(uniqueValidator,{ message :"Name duplicates."});

module.exports = mongoose.model("Pet", PetSchema);

