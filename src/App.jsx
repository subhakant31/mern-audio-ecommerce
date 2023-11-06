import React from "react";
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App(props)
{
	return(
		<React.Fragment>
			<SignInPage/>
			<SignUpPage/>
		</React.Fragment>
	)
}

export default App;