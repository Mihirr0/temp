import './App.css';

import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import Contact from './components/Contacts';
import React, {useState} from 'react'
// import slider from './components/slider';
import Login from './components/Login';
import Quiz from './components/Quiz';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
// import Quiz from './components/Quiz';


function App() {
  const [mode, setMode] = useState('light')

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor=' dark';
    }

    else{
      setMode('light')
      document.body.style.backgroundColor='white'; 
    }
  }
  return (
    <div>

    {/* <Navbar Title="study channel" mode={mode} togglemode={togglemode}/> */}

            <Contact />
    <Login/>
          <Quiz/>
    </div>
  );
}

export default App;





