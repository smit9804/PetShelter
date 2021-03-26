import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PetBlock from './PetBlock';

const PetDetails = (props) => {
    const [pet, setPet] = useState({});




    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.pet))
            .catch(err => console.log(err))
    }, [props.id]);

    const remove = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    // const thumb = e => {
    //     setLike(pet.like += 1)
    //     axios.put(`http://localhost:8000/api/pets/update/${props.id}`, pet)
    //         .then(res => {
    //             console.log(res.data);

    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        <div>
            <div className="container">
                <br />
                <PetBlock pet={pet} remove={remove} thumb={thumb}/>
                <Link class="orangebtn" to="/">Back to Home Page</Link>
            </div>
        </div>
    )
}

export default PetDetails;