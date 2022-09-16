import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const company = "HCL";
  const [name, setName] = useState("Aashish");
  return (
    // <div className="App">
    //   <h1>Class Component</h1>

    //   <ClassComponent></ClassComponent>
    //   <br></br>
    //   <h1>Functional Component</h1>
    //   {/* attributes in FunctionalComponent are called PROPS */}
    //   <FunctionalComponent name={name} age={23} array={[1, 2, 3, 4]} company={company} setName={setName}> </FunctionalComponent>


    // </div>
    <Routes>
      <Route path='/' element={<ClassComponent />}></Route>
      <Route path='/fc' element={<FunctionalComponent name={name} age={23} array={[1, 2, 3, 4]} company={company} setName={setName}> </FunctionalComponent>}></Route>


    </Routes>

  );
}

export default App;
