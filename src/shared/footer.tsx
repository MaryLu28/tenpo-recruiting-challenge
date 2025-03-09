import styled from "styled-components";
import { Colors } from "./colors";

const Container = styled.div`
  background-color: ${Colors.darkGray};
  width: 100%;
  height: 80px;
  padding: 0 28px;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        Realizado por <b>María Lourdes Garcia Flórez</b>
      </Text>
    </Container>
  );
};
export default Footer;
