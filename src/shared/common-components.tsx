import styled from "styled-components";
import { tablet } from "./breakpoints";
import { Colors } from "./colors";

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${Colors.black};
  position: relative;
`;

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* 100vh - header - footer */
  min-height: calc(100vh - 65px - 80px);

  @media (${tablet}) {
    /* 100vh - header - footer */
    min-height: calc(100vh - 70px - 80px);
  }
`;

export const BaseContent = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 20px;
`;
