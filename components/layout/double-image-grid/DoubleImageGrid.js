import { Grid, Image } from "./DoubleImageGridStyles";

const DoubleImageGrid = ({ images }) => {
  return (
    <Grid>
      {images.map((image) => (
        <Image image={image} />
      ))}
    </Grid>
  );
};

export default DoubleImageGrid;
