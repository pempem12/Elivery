import React from 'react';
// import Culvers from "./components/Pages/Culvers";
import Start from "./components/Pages/Start";
import {Routes, Route} from 'react-router-dom';
import IndividualPage from './components/Pages/IndividualPage';

function App() {
  return (
    <Routes>
      <Route index element={<Start/>}/>
      <Route path=":restaurant" element={<IndividualPage/>}/>
    </Routes>
        
  );
}

export default App;
