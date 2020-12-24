import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import { Btn } from "./SubmitButtonStyles";

const SubmitButton = ({ children, loading, invert }) => {
  return (
    <Btn invert={invert}>
      {loading ? <LoadingSpinner small /> : <span>{children}</span>}
    </Btn>
  );
};

export default SubmitButton;
