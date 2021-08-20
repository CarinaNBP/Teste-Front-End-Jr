import styled from "styled-components";
import redeImg from "../../assets/rede.png";

export const HomeStyled = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  background: url(${redeImg}) no-repeat fixed center;
  background-position: 110vh 50%;
  background-size: 70%;
`;

export const NotFoundMessage = styled.span`
  font-size: 2rem;
  color: white;
  background-color: var(--light-blue);
  padding: 1rem;
  border: 0.15rem solid var(--light-orange);
  border-radius: 0.25rem;
  margin-left: 3rem;
`;
