import "./SignUp.scss";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import AppleLogo from '../../../assets/images/apple.svg';
import GoogleLogo from '../../../assets/images/google.svg';
import FacebookLogo from '../../../assets/images/facebook-f.svg';

function SignUp() {
    return (
        <form className="form">
            <InputField
                for="mail"
                id="mail"
                placeholder="Email"
                name="mail"
                type="email"
                icon={faEnvelope}
            />
            <InputField
                for="password"
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                icon={faLock}
            />
            <Button
                for="submit"
                type="submit"
                id="submit"
                name="submit"
                value="Sign in"
            />
            <ul className="form__list">
                <li className="form__list__listitem">
                    <img
                        className="item"
                        src={AppleLogo}
                        alt="apple logo"
                    ></img>
                </li>
                <li className="form__list__listitem">
                    <img
                        className="item"
                        src={FacebookLogo}
                        alt="facebook logo"
                    ></img>
                </li>
                <li className="form__list__listitem">
                    <img
                        className="item"
                        src={GoogleLogo}
                        alt="google logo"
                    ></img>
                </li>
            </ul>
            <p className="form__account">
                If you have an account?
                <a href="#" className="form__account__redirect">
                    Sign In here
                </a>
            </p>
        </form>
    );
}

export default SignUp;
