
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import { useState } from "react";

function App(){
  const [name,setname]=useState([
    {
        username:"dinesh",
        password:"123@"
    }
  ])

  return(
    <div>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Login name={name} setname={setname}/>}></Route>
  <Route path="/Signup" element={<Signup name={name} setname={setname}/>}></Route>
  <Route path="/Landing" element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
