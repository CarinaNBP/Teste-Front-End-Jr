import styled from "styled-components";
import { borderRadius, borderShadowDefault } from "../../styles";

export const CardUserStyled = styled.div`
  margin: 0;
  min-width: 40rem;
  max-width: 90%;
  background: var(--light-blue);
  padding: 10px;
  border: 0.3rem solid var(--light-orange);
  ${borderRadius}
  display: flex;
  align-items: center;
  justify-content: center;
  ${borderShadowDefault}

  h1 {
    white-space: break-spaces;
  }

  div {
    padding: 0 3rem 0 1rem;
    white-space: nowrap;
  }

  img {
    margin: 2rem;
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
  }

  a {
    text-decoration: none;
    font: 400 1rem "Roboto", sans-serif;
    color: var(--white);
  }
  h2,
  h3 {
    font: 400 1rem "Roboto", sans-serif;
    color: var(--white);
    margin-bottom: 1rem;
    white-space: break-spaces;
  }
  h2 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
`;
