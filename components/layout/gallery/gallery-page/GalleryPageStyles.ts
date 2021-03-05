import { animated } from "react-spring";
import styled from "styled-components";

interface SelectionItemProps {
  selected: boolean;
}

interface ImageBoxProps {
  image: string;
}

const Container = styled.div`
  grid-column: content-start / content-end;
  min-height: 100vh;
  width: 100%;
  padding: 15rem 0 0 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  gap: 10rem;
  align-items: start;
`;

const SelectionPanel = styled.section`
  justify-self: center;

  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SelectionItem = styled.p<SelectionItemProps>`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) =>
    props.selected
      ? props.theme.colors.primary
      : props.theme.colors.primaryLight};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.bgMedium : "transparent"};
  box-shadow: none;
  border-radius: 5px;
  padding: 1rem 1rem;
  cursor: pointer;

  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const ImageGrid = styled.section`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(10rem, 1fr));
  grid-auto-rows: max-content;
  gap: 3rem;

  ${(props) => props.theme.responsive.big} {
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
  }

  ${(props) => props.theme.responsive.mediumSmall} {
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
  }

  ${(props) => props.theme.responsive.smaller} {
    grid-template-columns: minmax(10rem, 1fr);
  }
`;

const ImageBox = styled(animated.div)<ImageBoxProps>`
  width: 100%;
  padding-top: 70%;
  border-radius: 2px;

  display: inline-block;

  box-shadow: none;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: box-shadow 0.2s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

const GallerySliderOverlay = styled(animated.div)`
  position: fixed;

  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.bgLight};
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderOverLayCloseBtn = styled.p`
  position: absolute;
  top: 3rem;
  right: 3rem;

  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.colors.secondary};

  cursor: pointer;
`;

export {
  Container,
  SelectionPanel,
  SelectionItem,
  ImageGrid,
  ImageBox,
  GallerySliderOverlay,
  SliderOverLayCloseBtn,
};
