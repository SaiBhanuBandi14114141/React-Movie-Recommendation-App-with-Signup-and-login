import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Movielist from "./Components/Movielist"
import Signup from "./Components/Signup"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/movies" element={ <Movielist/> } />
        <Route path="*" element={ <Movielist/> } />
      </Routes> 
      
    </div>
  )
}

export default App
