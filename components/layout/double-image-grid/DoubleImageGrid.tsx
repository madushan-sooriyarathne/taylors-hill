import { Grid, Image } from "./DoubleImageGridStyles";

interface Props {
  images: string[];
}

const DoubleImageGrid: React.FC<Props> = ({ images }: Props): JSX.Element => {
  return (
    <Grid>
      {images.map((image: string) => (
        <Image image={image} />
      ))}
    </Grid>
  );
};

export default DoubleImageGrid;
