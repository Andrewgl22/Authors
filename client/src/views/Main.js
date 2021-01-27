import React from 'react';
import {Link} from '@reach/router';
import AuthorList from '../components/AuthorList';
import '../App.css';

const Main = () => {


    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to='/new'>Add an author</Link>
            <h3>We have quotes by:</h3>
            <AuthorList/>

        </div>
    )
}

export default Main;