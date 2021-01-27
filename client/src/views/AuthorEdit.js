import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const AuthorEdit = (props) => {
    const [name, setName] = useState("")
    const [error,setError] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/one/' + props.id)
        .then(res=>setName(res.data.name))
        .catch((err)=>console.log(err))
    },[]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${props.id}`,{
            name,
        })
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch((err)=>{
            console.log(err.response.data.errors);
            setError(err.response.data.errors.name.message);
    })
}

    return(
        <div>
            <Link to='/'>Home</Link>
            <h3>Edit this author:</h3> 
            <Form name={name} setName={setName} onSubmitHandler={updateAuthor}/>
            <p>{error}</p>
        </div>

    )
}

export default AuthorEdit;