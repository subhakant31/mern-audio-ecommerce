import "./SignUp.scss";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../InputField/InputField";
import ProductActionButton from "../../ProductActionButton/ProductActionButton";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <form className="form signUp">
            <InputField
                for="mail"
                id="mail"
                placeholder="Email"
                name="mail"
                type="email"
                title="Email"
                icon={faEnvelope}
                ariarequired={true}
                arialabel="Email"
                passwordValidator = {false}
            />
            <InputField
                for="password"
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                title="Password"
                icon={faLock}
                arialabel="Password"
                ariarequired={true}
                passwordValidator ={true}
            />
            <ProductActionButton buttonText="Sign Up" aria-label="Sign Up" title="Sign Up"/>
            <ul className="form__list">
                <li className="form__list__listitem"><a href="/" aria-label="Appstore" title="Appstore">
                    <img
                        className="item"
                        src='./assets/images/apple.svg'
                        alt="apple logo"
                    /></a>
                </li>
                <li className="form__list__listitem"><a href="/" aria-label="facebook" title="facebook">
                    <img
                        className="item"
                        src='./assets/images/facebook-f.svg'
                        alt="facebook logo"
                    /></a>
                </li>
                <li className="form__list__listitem"><a href="/" aria-label="playstore" title="playstore">
                    <img
                        className="item"
                        src='./assets/images/google.svg'
                        alt="google logo"
                    /></a>
                </li>
            </ul>
            <p className="form__account">
                If you have an account? <Link to="/login" aria-label="Sign In Here" title="Sign In Here" className="form__account__redirect">
                     Sign In here
                </Link>
            </p>
        </form>
    );
}

export default SignUp;
