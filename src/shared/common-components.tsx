import styled from "styled-components";
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
`;

export const BaseContent = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 20px;
`;
