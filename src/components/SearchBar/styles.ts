import styled from "styled-components";
import { borderRadius, borderShadowDefault } from "../../styles";

export const SearchBarStyled = styled.form`
  margin-left: 3rem;

  h1 {
    color: var(--white);
    font: 400 2rem "Roboto", sans-serif;
    margin-bottom: 2rem;

    span {
      color: var(--light-orange);
      font: 500 3rem "Roboto", sans-serif;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      padding: 0.8rem;
      border: 1px solid #f8f9fa;
      border-radius: 2rem;
      background-color: #f8f9fa;
      margin-right: 2rem;
      width: 15rem;
      outline: none;

      cursor: pointer;
      ${borderShadowDefault}
    }

    button {
      font: 400 1rem "Roboto", sans-serif;
      width: 6rem;
      height: 2.5rem;
      border: none;
      color: var(--white);
      ${borderRadius}
      background: var(--light-orange);

      cursor: pointer;

      transition: filter 0.2s;
      ${borderShadowDefault}

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
