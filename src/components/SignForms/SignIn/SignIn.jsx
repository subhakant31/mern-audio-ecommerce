import './SignIn.scss';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

function SignIn(){
    return(
        <form className='form'>
            <InputField for="mail" id="mail" placeholder="Email" name="mail" type="email" icon={faEnvelope}/>
            <InputField for="password" id="password" placeholder="Password" name="password" type="password" icon ={faLock} />
            <button className='form__forgot'>Forgot Password</button>
            <Button for= "submit" type="submit" id="submit" name="submit" value="Sign in"/>
            <p className='form__account'>Didn't have an account? <a href="#" className='form__account__redirect'>Sign Up here</a></p>
        </form>
    )
}

export default SignIn