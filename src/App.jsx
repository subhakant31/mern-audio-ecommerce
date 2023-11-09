import React from "react";
import "./App.scss"; 
import FilterCategory from "./components/FilterCategory/FilterCategory";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App(props)
{
	return(
		<React.Fragment>
			<SignUpPage />
		</React.Fragment>
	)
}

export default App;
