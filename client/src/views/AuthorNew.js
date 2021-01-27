import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const AuthorNew = () => {
    const [name, setName] = useState("")
    const [error,setError] = useState("")

    const addAuthor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new',{
            name
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
            <h3>Add A New Author:</h3> 
            <Form onSubmitHandler={addAuthor} setName={setName}/>
            <p>{error}</p>
        </div>

    )
}

export default AuthorNew;