import './SignIn.scss';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import InputField from '../InputField/InputField';
import ProductActionButton from '../../ProductActionButton/ProductActionButton';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SignIn(){
    // const navigate = useNavigate();
    // function moveToHomePage() {
    //     navigate("/home");
    // }
    return(
        <form className='form'>
            <InputField for="mail" id="mail" placeholder="Email" name="mail" type="email" icon={faEnvelope} title="Email" arialabel="Email" ariarequired={true} autocomplete="username"/>
            <InputField for="password" id="password" placeholder="Password" name="password" type="password" icon ={faLock} title="Password" arialabel="Password" ariarequired={true} autocomplete="current-password"/>
            <a href="/" aria-label="Forgot Password" title="Forgot Password" className='form__forgot'>Forgot Password</a>
            <ProductActionButton buttonText="Sign In" aria-label="Sign In" title="Sign In" path = "/home" />
            <p className='form__account'>Didn't have an account? <Link to="/signup" aria-label="Sign Up Here" title="Sign Up Here" className='form__account__redirect'> Sign Up here</Link></p>
        </form>
    )
}

export default SignIn