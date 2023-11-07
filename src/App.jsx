import React from "react"; 
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import "./App.scss"; 
import { Route, Routes } from "react-router-dom";

function App(props)
{
	return(
		<React.Fragment>
      <Homemenubar></Homemenubar>
      <ProfilePage></ProfilePage>
		</React.Fragment>
	)
}

export default App;
