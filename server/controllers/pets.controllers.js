const Pet = require('../models/pets.models');



//to Create a new Pet
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({pet: newPet}))
        .catch(err => res.json({message: "Sorry champ, I can't make that pet happen", error: err}));
}

//to Read all Pets
module.exports.findAllPets = (req, res) => {
    Pet.find({})
        .then(allPets => res.json({ pets: allPets}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}


//to Read a single Pet
module.exports.findOne = (req, res) => {
    Pet.findOne({_id : req.params.id})
        .then(onePet => res.json({ pet: onePet}))
        .catch(err => res.json({message: "It ain't here, big dog!", error:err}));
}

//to Update a Pet
module.exports.updateOne = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true, context: 'query'} )
        .then(updatePet => res.json({ pet: updatePet}))
        .catch(err => res.json({message: "Well, looks like i can't update that one. Something went wrong!", error: err}));
}


//to Delete a Pet
module.exports.deleteThePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => res.json({ pet: deletedPet}))
        .catch(err => res.json({message: "Too good to delete... Something went wrong buddy!", error: err}))
}