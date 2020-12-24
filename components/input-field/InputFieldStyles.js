import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: start;
  justify-items: start;

  position: relative;
`;

const Input = styled.input`
  height: auto;
  width: 100%;

  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  padding: 3rem 2rem 1rem 2rem;
  outline: none;
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.secondary}`};

  transition: border 0.2s ease-in-out;

  &:not(:placeholder-shown):invalid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.danger}`};
  }

  &:not(:placeholder-shown):valid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.success}`};
  }

  &:placeholder-shown {
    & + label {
      transform: translateY(3rem);
      opacity: 0;
      visibility: hidden;
    }
  }

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.secondaryLight};
    font-family: ${(props) => props.theme.fonts.primary};
  }
`;

const TextArea = styled.textarea`
  height: 20rem;
  width: 100%;

  font-size: 1.6rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  padding: 3rem 2rem 1rem 2rem;
  outline: none;
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.secondary}`};

  transition: border 0.2s ease-in-out;

  &:not(:placeholder-shown):invalid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.danger}`};
  }

  &:not(:placeholder-shown):valid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.success}`};
  }

  &:placeholder-shown {
    & + label {
      transform: translateY(3rem);
      opacity: 0;
      visibility: hidden;
    }
  }

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.secondaryLight};
    font-family: ${(props) => props.theme.fonts.primary};
  }
`;

const Label = styled.label`
  position: absolute;
  top: 5px;
  left: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primaryLight};
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  transition: transform 0.2s ease, opacity 0.2s ease;
`;

export { InputWrapper, Input, TextArea, Label };
