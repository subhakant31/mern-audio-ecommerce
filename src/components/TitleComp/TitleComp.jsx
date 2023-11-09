import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TitleComp.scss';

function TitleComp(props){
    return(
        <div className='title'>
            <ul className='title__list'>
                <li><a href="#" aria-label={props.leftIconLabel} title={props.leftIconLabel}><FontAwesomeIcon className='title__list__icon' icon={props.leftIcon} /></a></li>
                <li className={`title__list__text ${props.state}`}>{props.title}</li>
                <li><a href="#" aria-label={props.rightIconLabel} title={props.rightIconLabel}><FontAwesomeIcon className='title__list__icon' icon={props.rightIcon} /></a></li>
            </ul>
        </div>
    )
}

export default TitleComp;