import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Add from "./assignment-4/Add"
import Edit from "./assignment-4/Edit"
import DeleteMember from "./assignment-4/DeleteMember"
import Home from "./assignment-4/Home"

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/delete/:id" element={<DeleteMember/>}/>
        </Routes>
      </Router>
  )
}

export default App