import { ReactNode } from "react";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import { Btn } from "./SubmitButtonStyles";

interface Props {
  children: ReactNode;
  invert: boolean;
  loading?: boolean;
}

const SubmitButton: React.FC<Props> = ({
  children,
  loading,
  invert,
}: Props): JSX.Element => {
  return (
    <Btn invert={invert}>
      {loading ? <LoadingSpinner small /> : <span>{children}</span>}
    </Btn>
  );
};

export default SubmitButton;
