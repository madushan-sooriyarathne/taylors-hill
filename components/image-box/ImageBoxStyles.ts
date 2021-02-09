import styled from "styled-components";

interface BoxProps {
  image: string;
}

const Box = styled.div<BoxProps>`
  width: 100%;
  height: 100%;
  padding: 3rem;

  background-image: ${(props) =>
    `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%), url(${props.image})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end;
  transform-origin: 50% 50%;
  transition: transform 0.2s ease-in;
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  cursor: pointer;

  &:hover {
    div {
      transform: translateX(5px);
    }

    p {
      color: ${(props) => props.theme.colors.secondaryLight};
    }
  }
`;

const AnchorText = styled.p`
  outline: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
  transition: color 0.2s ease-in;
`;

const Arrow = styled.div`
  width: 4rem;
  height: 0.5rem;
  margin-top: 3px;
  margin-left: 0.5rem;
  background-image: url("/static/img/arrow.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: transform 0.2s ease-in-out;
`;

export { Box, ContentGroup, Anchor, AnchorText, Arrow };
