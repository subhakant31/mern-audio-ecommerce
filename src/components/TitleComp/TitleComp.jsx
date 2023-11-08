import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './TitleComp.scss';

function TitleComp(props){
    return(
        <div className='title'>
            <ul className='title__list'>
                <li><a href="#"><FontAwesomeIcon className='title__list__icon' icon={props.leftIcon} /></a></li>
                <li className={`title__list__text ${props.state}`}>{props.title}</li>
                <li><a href="#"><FontAwesomeIcon className='title__list__icon' icon={props.rightIcon} /></a></li>
            </ul>
        </div>
    )
}

export default TitleComp;