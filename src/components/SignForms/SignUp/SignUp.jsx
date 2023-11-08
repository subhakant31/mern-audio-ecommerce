import "./SignUp.scss";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

function SignUp() {
    return (
        <form className="form">
            <InputField
                for="mail"
                id="mail"
                placeholder="Email"
                name="mail"
                type="email"
                title="Email"
                icon={faEnvelope}
            />
            <InputField
                for="password"
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                title="Password"
                icon={faLock}
            />
            <Button
                for="submit"
                type="submit"
                id="submit"
                name="submit"
                value="Sign Up"
            />
            <ul className="form__list">
                <li className="form__list__listitem"><a href="#">
                    <img
                        className="item"
                        src='./assets/images/apple.svg'
                        alt="apple logo"
                    ></img></a>
                </li>
                <li className="form__list__listitem"><a href="#">
                    <img
                        className="item"
                        src='./assets/images/facebook-f.svg'
                        alt="facebook logo"
                    ></img></a>
                </li>
                <li className="form__list__listitem"><a href="#">
                    <img
                        className="item"
                        src='./assets/images/google.svg'
                        alt="google logo"
                    ></img></a>
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
