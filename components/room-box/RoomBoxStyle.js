import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;

  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%),url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;

  h2 {
    color: ${(props) => props.theme.colors.white};
    transition: color 0.3s ease-in 0.1s;
  }

  &:hover {
    div {
      background-color: ${(props) => props.theme.colors.white};
      transform: translateY(2px);

      h2 {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 60%;
  transform: translateY(70%);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  will-change: transform;

  background-color: transparent;

  transition: transform 0.3s ease-out 0.1s, background-color 0.3s ease 0.1s;
`;

const RoomType = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};

  margin-top: 2rem;
`;

const Button = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  color: ${(props) => props.theme.colors.secondary};
  transition: color 0.2s ease-in-out;

  cursor: pointer;
  margin-top: auto;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export { Box, ContentWrapper, RoomType, Description, Button };
