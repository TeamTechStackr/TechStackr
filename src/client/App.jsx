import React from 'react';
import Maincontainer from './Containers/MainContainer';

const App = () => {
  return (
    //render a container

    <div id='app' className='container'>
      <h1>TechStackr</h1>
      <Maincontainer />
    </div>
  );
};

export default App;
