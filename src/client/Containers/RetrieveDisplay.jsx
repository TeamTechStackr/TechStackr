import React from 'react';
import { useState } from 'react';

const RetrieveDisplay = () => {
    //create a piece of state, lets call it "projects", for now it will be an empty array.
    const [projectState, setProjects] = useState([]);
    //declare a handler function for clicking our submit button, 
    const clickHandler = () => {
        //it sends the stuff in our text box to our back end and it expects an array of objects in return
        //we assign that array of objects to our "projects" state.
        setProjects([
            {name: 'KlusterBud', ghLink: 'github/klusterbud', techUsed: ['tech', 'tech']}, 
            {name: 'KlusterBud', ghLink: 'github/klusterbud', techUsed: ['tech', 'tech']}, 
            {name: 'KlusterBud', ghLink: 'github/klusterbud', techUsed: ['tech', 'tech']}])
    }



    return (
        <div>
            <h1>Retrieve Display</h1>
            <input type='text' id='techs' placeholder='Looking for...'></input>
            <button onClick={clickHandler}>submit</button>
            {/*'map' projectState to an array of elements that we can display.*/}
            {projectState.map((value, index) => 
                <div key={index}>
                    <h1>{value.name}</h1>
                    <h2>{value.ghLink}</h2>
                    <h3>{value.techUsed}</h3>
                </div>
            )}
        </div>
        
    )
}


export default RetrieveDisplay;