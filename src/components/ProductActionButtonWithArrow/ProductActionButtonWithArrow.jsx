import "./ProductActionButtonWithArrow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function ProductActionButtonWithArrow(props) {
  const buttonText = props.buttonText;
  const ariaLabelText = props.ariaLabelText;
  const title = props.title;
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

        <span className="product-action-button-wrapper__button__icon">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    </div>
  );
}
export default ProductActionButtonWithArrow;
