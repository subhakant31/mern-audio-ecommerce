import './InputField.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputField(props){
    let forValue = props.for;
    let type= props.type;
    let id = props.id;
    let nameValue =props.name;
    let placeholder = props.placeholder;
    let icon = props.icon;
    let title = props.title;

    return(
        <div className='form__input' tabIndex="0">
          <label aria-hidden='true' for ={forValue}></label>
          <FontAwesomeIcon className='form__input__icon' icon={icon} />
          <input type={type} id={id} name={nameValue} placeholder={placeholder} title={title}></input>
        </div>
    )
} 

export default InputField;