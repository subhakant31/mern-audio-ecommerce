import './SignUpPage.scss';
import SignUp from '../../components/SignForms/SignUp/SignUp';
import HeroText from '../../components/HeroText/HeroText';
import TitleComp from '../../components/TitleComp/TitleComp';
import { faChevronLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function SignUpPage(){
    return(
        <div className='page'>
            <HeroText />
            <SignUp />
            <TitleComp title= "Search" leftIcon= {faChevronLeft} rightIcon={faCartShopping} state="show" />
        </div>
    )
}

export default SignUpPage;