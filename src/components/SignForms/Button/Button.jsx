import "./Button.scss";

function Button(props) {
    let forValue = props.for;
    let type= props.type;
    let id = props.id;
    let nameValue =props.name;
    let value = props.value;
  return (
    <div className="form__button">
      <label for ={forValue}></label>
      <input type={type} id={id} name={nameValue} value={value}></input>
    </div>
  );
}

export default Button;