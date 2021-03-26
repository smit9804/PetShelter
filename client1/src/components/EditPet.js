import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditPet = props => {
    const {id} = props;
    const[ name, setName] = useState("");
    const[ type, setType] = useState("");
    const[ description, setDescription] = useState("");
    const[ skill1, setSkill1] = useState("");
    const[ skill2, setSkill2] = useState("");
    const[ skill3, setSkill3] = useState("");
    const[ errors, setErrors] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/pets/" + id)
        .then(res => {
            // console.log(res);
                setName(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkill1(res.data.pet.skill1);
                setSkill2(res.data.pet.skill2);
                setSkill3(res.data.pet.skill3);
        })
        .catch(err => console.log(err))
    }, [id])
    
    const update = (e) => {
        e.preventDefault();
        const changedPet = {name, type, description, skill1, skill2, skill3};
        axios.put("http://localhost:8000/api/pets/update/" + id, changedPet)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => console.log(err));
    }

    return ( 
        <div class="horizon">
            <h1>Pet Form Page</h1>
            <form onSubmit={update}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <h5>Describe the Pet</h5>
                            <h5 style={{color: "red"}}>(Required)</h5>
                            <div className="form-group">
                                <label>Name:</label>
                                <input value={name} className="form-control" type="text" onChange={e => setName(e.target.value)} />
                                {errors.name && <span className="alert alert-danger">{errors.name.message}</span>}
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <input value={type}className="form-control" type="text" onChange={e => setType(e.target.value)} />
                                {errors.type && <span className="alert alert-danger">{errors.type.message}</span>}
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <input value={description} className="form-control" type="text" onChange={e => setDescription(e.target.value)} />
                                {errors.description && <span className="alert alert-danger">{errors.description.message}</span>}
                            </div>
                        </div>
                        <div className="col">
                            <h5>Skills</h5>
                            <h5>(optional)</h5>
                            <div className="form-group">
                                <label>Skill 1:</label>
                                <input value={skill1} className="form-control" type="text" onChange={e => setSkill1(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Skill 2:</label>
                                <input value={skill2} className="form-control" type="text" onChange={e => setSkill2(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Skill 3:</label>
                                <input value={skill3} className="form-control" type="text" onChange={e => setSkill3(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <input type="submit" class="bluebtn" value="Update Pet"/>
                </div>
            </form>
            <Link class="orangebtn" to="/">Back to Home Page</Link>
        </div>
    )
}

export default EditPet;