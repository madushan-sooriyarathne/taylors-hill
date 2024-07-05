import Image from "next/image";
import { Widget } from "./styles";

const BestWebVoteWidget: React.FC = (): JSX.Element => {
  return (
    <Widget
      href="https://www.vote.bestweb.lk/site/taylorshill_lk"
      role="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://www.bw2024.lk/vote4us.png"
        alt="Bestweb 2023 voting button"
        objectFit="contain"
        width="100%"
        height="100%"
      />
    </Widget>
  );
};

export default BestWebVoteWidget;
