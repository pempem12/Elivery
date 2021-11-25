import React from 'react';
// import Culvers from "./components/Pages/Culvers";
import Start from "./components/Pages/Start";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />}/>
      {/* <Route path="/Culvers" element={<Culvers />}/> */}
    </Routes>
        
  );
}

export default App;
