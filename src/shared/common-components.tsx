import styled from "styled-components";
import { colors } from "./colors";

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.black};
`;

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BaseContent = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 20px;
`;
