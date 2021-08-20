import styled from "styled-components";

export const CardUserStyled = styled.div`
  margin: 0;
  /* margin: 40px 0; */
  background: var(--light-blue);
  padding: 10px;
  border: 0.3rem solid var(--light-orange);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 0 3rem 0 1rem;
    white-space: nowrap;
  }

  img {
    margin: 2rem;
    border-radius: 15rem;
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
  }
  h2 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
`;
