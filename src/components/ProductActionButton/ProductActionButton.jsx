import "./ProductActionButton.scss";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductActionButton(props) {
  const buttonText = props.buttonText; //text inside the button
  const ariaLabelText = props.ariaLabelText; //aria label of the button
  const title = props.title; //title of the button
  const path = props.path; //path to be redirected
  
  return (
    <div className="product-action-button-wrapper">
      <Link
        to={path}
        aria-label={ariaLabelText}
        title={title}
        className="product-action-button-wrapper__button"
      >
        <span className="product-action-button-wrapper__button__text">
          {buttonText}
        </span>
      </Link>
    </div>
  );
}
export default ProductActionButton;
