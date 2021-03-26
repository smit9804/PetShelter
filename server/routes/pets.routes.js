const Pet = require('../controllers/pets.controllers');

module.exports = app => {
    //return all pets
    app.get("/api/pets/", Pet.findAllPets);
    // return one pet
    app.get("/api/pets/:id", Pet.findOne);
    //create a new pet
    app.post("/api/pets/new", Pet.createPet);
    //update a pet
    app.put("/api/pets/update/:id", Pet.updateOne);
    //delete a pet
    app.delete("/api/pets/delete/:id", Pet.deleteThePet);
}