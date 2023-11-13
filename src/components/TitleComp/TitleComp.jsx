import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TitleComp.scss';

function TitleComp(props){
    let leftIconLabel = props.leftIconLabel;
    let rightIconLabel = props.rightIconLabel;
    let leftIcon = props.leftIcon;
    let rightIcon = props.rightIcon;
    let state = props.state;
    let title = props.title;

    return(
        <div className='title'>
            <ul className='title__list'>
                <li><a href="/" aria-label={leftIconLabel} title={leftIconLabel}><FontAwesomeIcon className='title__list__icon' icon={leftIcon} /></a></li>
                <li className={`title__list__text ${state}`}>{title}</li>
                <li><a href="/" aria-label={rightIconLabel} title={rightIconLabel}><FontAwesomeIcon className='title__list__icon' icon={rightIcon} /></a></li>
            </ul>
        </div>
    )
}

export default TitleComp;