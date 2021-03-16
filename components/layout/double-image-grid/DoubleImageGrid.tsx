import { Grid, Image } from "./DoubleImageGridStyles";

interface Props {
  images: string[];
}

const DoubleImageGrid: React.FC<Props> = ({ images }: Props): JSX.Element => {
  return (
    <Grid>
      {images.map((image: string, index: number) => (
        <Image image={image} key={index} />
      ))}
    </Grid>
  );
};

export default DoubleImageGrid;
