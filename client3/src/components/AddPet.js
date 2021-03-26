import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const AddPet = (props) => {

    const[ name, setName] = useState("");
    const[ type, setType] = useState("");
    const[ description, setDescription] = useState("");
    const[ skill1, setSkill1] = useState("");
    const[ skill2, setSkill2] = useState("");
    const[ skill3, setSkill3] = useState("");
    const[ errors, setErrors] = useState({});

    const add = e => {
        e.preventDefault();
        const newPet = {name, type, description, skill1, skill2, skill3};

        axios.post("http://localhost:8000/api/pets/new/", newPet)
            .then(res => {
                console.log(res.data);
                if(res.data.pet) {
                    navigate("/")
                }
                else{
                    setErrors(res.data.error.errors);
                }
                
            })
            .catch(err => console.log(err));
    }

    return (
        <div class="horizon">
            <h1>Pet Form Page</h1>
            <form onSubmit={add}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <h5>Describe the Pet</h5>
                            <h5 style={{color: "red"}}>(Required)</h5>
                            <div className="form-group">
                                <label>Name:</label>
                                <input className="form-control" type="text" onChange={e => setName(e.target.value)} />
                                {errors.name && <span className="alert alert-danger">{errors.name.message}</span>}
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <input className="form-control" type="text" onChange={e => setType(e.target.value)} />
                                {errors.type && <span className="alert alert-danger">{errors.type.message}</span>}
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} />
                                {errors.description && <span className="alert alert-danger">{errors.description.message}</span>}
                            </div>
                        </div>
                        <div className="col">
                            <h5>Skills</h5>
                            <h5>(optional)</h5>
                            <div className="form-group">
                                <label>Skill 1:</label>
                                <input className="form-control" type="text" onChange={e => setSkill1(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Skill 2:</label>
                                <input className="form-control" type="text" onChange={e => setSkill2(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Skill 3:</label>
                                <input className="form-control" type="text" onChange={e => setSkill3(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <input type="submit" class="bluebtn" value="Add Pet"/>
                </div>
            </form>
            <Link class="orangebtn" to="/">Back to Home Page</Link>
        </div>
    )
}

export default AddPet;