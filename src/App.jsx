import React from "react";
import ProfileSetting from "./components/Profile/ProfileEdit";
import Homemenubar from "./components/Menu/HomeMenu";
import "./App.scss"; 
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    
        <Routes >
          <Route path="/home" element={<Homemenubar/>} />
          <Route path="/profile" element={<ProfileSetting/>} />
        </Routes>
    
    </React.Fragment>
  );
}

export default App;
