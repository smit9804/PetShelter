
import React from 'react';

const PetBlock = props => {
    const {pet, remove} = props;

    

    return (
        <div class="beach">
            <button class="redbtn" onClick={remove}>Adopt {pet.name}</button>
            <h2>{pet.name}'s details:</h2>
            <h2 class="ou">{pet.name} is a {pet.type} <br/>and can best be described as {pet.description}. His skills include the following: {pet.skill1}, {pet.skill2}, and {pet.skill3}. </h2>
        </div>
    )
}

export default PetBlock;