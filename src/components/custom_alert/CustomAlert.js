// styles
import "./CustomAlert.scss";
const CustomAlert = ({ errorMessage }) => {
  return (
    <div className="error-message-alert-container">
      <div className="error-message-alert-inner-container">
        <h3>{errorMessage}</h3>
      </div>
    </div>
  );
};

export default CustomAlert;
