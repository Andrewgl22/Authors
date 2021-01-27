import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import {navigate} from '@reach/router';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>setAuthors(res.data))
        .catch(err=>console.log(err))
    },[<DeleteButton></DeleteButton>])
    
    return(
        <div className='table'>
            <table>
                <th>Author</th>
                <th>Actions Available</th>
                {authors.map((author,i)=>(
                    <tr>
                        <td>{author.name}</td>
                        <td><button onClick={(e)=>navigate(`/edit/${author._id}`)} style={{backgroundColor:"yellow"}}>Edit</button></td>   
                        <td><DeleteButton ID={author._id}/></td>
                    </tr>
                                           
                ))
                }
            </table>
        </div>
    )
}

export default AuthorList;