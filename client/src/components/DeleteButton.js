
import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = (props) => {

    const deleteButton = (e) => {
        axios.delete("http://localhost:8000/api/delete/" + props.ID)
        .then((delObj)=>{
            console.log("hello");
            navigate('/');
        })
        .catch((err)=>console.log(err))
        }

    return(<button onClick={deleteButton} style={{backgroundColor:"red"}}>Delete</button>)
    }

export default DeleteButton;