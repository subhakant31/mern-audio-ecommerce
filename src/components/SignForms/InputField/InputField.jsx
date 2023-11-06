import './InputField.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputField(props){
    let forValue = props.for;
    let type= props.type;
    let id = props.id;
    let nameValue =props.name;
    let placeholder = props.placeholder;
    let icon = props.icon;

    return(
        <div className='form__input'>
          <label for ={forValue}></label>
          <FontAwesomeIcon icon={icon} />
          <input type={type} id={id} name={nameValue} placeholder={placeholder}></input>
        </div>
    )
} 

export default InputField;