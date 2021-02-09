import { Spinner } from "./LoadingSpinnerStyles";

interface Props {
  small?: boolean;
}

const LoadingSpinner: React.FC<Props> = ({
  small = false,
}: Props): JSX.Element => <Spinner small={small} />;

export default LoadingSpinner;
