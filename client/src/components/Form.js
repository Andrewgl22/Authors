import React from 'react';
import {navigate} from '@reach/router'

const Form = (props) => {

    const myStyle = {
        backgroundColor:"lightblue",
        margin: "5px",
        marginLeft: "10px",
    }

    return(
        <div className="App">
            <form onSubmit={props.onSubmitHandler}>
                <label>Name:</label>
                <input type="text" onChange={(e)=>props.setName(e.target.value)} value={props.name}/><br></br>
                <button type='button' onClick={()=>navigate('/')} style={myStyle}>Cancel</button>
                <input type="submit" value="Submit" style={myStyle}/>
            </form>
            
        </div>

    )
}

export default Form;