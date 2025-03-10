import styled from "styled-components";
import { Colors } from "../shared/colors";

export const PrimaryButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${Colors.black};
  background-color: ${Colors.primary};
  border: none;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.HighlightPrimary};
  }
`;
