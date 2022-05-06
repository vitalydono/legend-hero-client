import styled from "styled-components";

export const PlayerCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const PlayerCard = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  border-color: lightblue;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const PlayerInfo = styled.div``;

export const ActionButtonsWrapper = styled.div``;
