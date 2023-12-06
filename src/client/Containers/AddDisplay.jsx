import React from 'react';
import { Link } from 'react-router-dom';

const AddDisplay = () => {
  const clickHandler = () => {
    const name = document.getElementById('name').value;
    const link = document.getElementById('link').value;
    const techsArr = document.getElementById('techs').value.split(',');
    for (let i = 0; i < techsArr.length; i++) {
      techsArr[i] = techsArr[i].trim();
    }
    console.log(name, link, techsArr);
  };

  return (
    <div id='adddisplay' className='container'>
      <h1>Add Display</h1>
      <input type='text' id='name' placeholder='Project Name'></input>
      <input type='text' id='link' placeholder='GitHub Link'></input>
      <input type='text' id='techs' placeholder='Technology Used'></input>
      <button onClick={clickHandler}>submit</button>
    </div>
  );
};

export default AddDisplay;
