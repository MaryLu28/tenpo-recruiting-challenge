import styled from "styled-components";
import { Colors } from "./colors";

const Container = styled.div`
  background-color: ${Colors.darkGray};
  width: 100%;
  height: 80px;
  padding: 0 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1140px;
  width: 100%;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Text>
          Realizado por <b>María Lourdes Garcia Flórez</b>
        </Text>
      </Content>
    </Container>
  );
};
export default Footer;
