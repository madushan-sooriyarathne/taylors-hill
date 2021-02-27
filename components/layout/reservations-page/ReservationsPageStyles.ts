import styled from "styled-components";

const Container = styled.div`
  grid-column: full-start / full-end;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 2rem;

  margin-bottom: -10rem;
`;

const CoverImage = styled.div`
  background-image: url("/static/img/th-morning-door.webp");
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormContainer = styled.div`
  padding: 15rem 5rem 10rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const MessageHeading = styled.h1`
  font-size: 7rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.bgDark};
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;

export { Container, CoverImage, FormContainer, MessageHeading, ButtonWrapper };
