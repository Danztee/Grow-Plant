import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  background: ${({ background }) => background || ""};
`;

export const StyledImage = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "start"};

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;
