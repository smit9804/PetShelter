import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllPets = (props) => {

    const [pets, setPets] = useState([]);

    const fetchPets = () => {
        axios.get("http://localhost:8000/api/pets/")
            .then(res => {
                console.log(res.data.pets);
                setPets(res.data.pets);
            })
            .catch(err => console.log(err));
    }



    useEffect (() => {
        fetchPets();
    }, []);

    return (
        <div>
            <Link class="greenbtn" to="/new">Add a Pet To The Shelter</Link>
            <h2>These pets are loooking for a new home:</h2>
            <div className="container">
                <table className="table table-hover">
                    <thead class="orange">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody class="blueness">
                        {
                            pets.map(( pet, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <Link class="indigobtn" to={`/pets/${pet._id}`}>Details</Link>
                                            <Link class="yellowbtn" to={`/pets/update/${pet._id}`}>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllPets;