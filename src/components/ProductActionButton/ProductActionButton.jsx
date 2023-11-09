import "./ProductActionButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function ProductActionButton(props) {
  const buttonText = props.buttonText;
  const ariaLabelText = props.ariaLabelText;
  const title = props.title;
  const arrowRight = false;
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
