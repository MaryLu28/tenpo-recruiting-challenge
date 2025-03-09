import { FadeLoader } from "react-spinners";
import { Colors } from "./colors";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.darkGray};
  opacity: 0.8;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: -2px;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Container>
        <FadeLoader
          color={Colors.primary}
          height={30}
          loading
          margin={15}
          radius={5}
          speedMultiplier={1}
          width={10}
        />
      </Container>
    </Wrapper>
  );
};

export default Loader;
