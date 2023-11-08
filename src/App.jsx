import React from "react";
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Homemenubar from "./components/Menu/HomeMenu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import "./App.scss"; 

function App(props)
{
	return(
		<React.Fragment>
			<SignInPage />
			<SignUpPage />
      <Homemenubar></Homemenubar>
      <ProfilePage></ProfilePage>
		</React.Fragment>
	)
}

export default App;
