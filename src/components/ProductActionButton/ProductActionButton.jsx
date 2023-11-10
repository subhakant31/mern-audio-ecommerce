import "./ProductActionButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductActionButton(props) {
  const buttonText = props.buttonText; //text inside the button
  const ariaLabelText = props.ariaLabelText; //aria label of the button
  const title = props.title; //title of the button
  
  return (
    <div className="product-action-button-wrapper">
      <a
        href="/"
        aria-label={ariaLabelText}
        title={title}
        className="product-action-button-wrapper__button"
      >
        <span className="product-action-button-wrapper__button__text">
          {buttonText}
        </span>
      </a>
    </div>
  );
}
export default ProductActionButton;
