import { BeatLoader, FadeLoader } from "react-spinners";
import { Colors } from "../shared/colors";
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
`;

const FadeContainer = styled(Container)`
  margin-left: -2px;
`;

const DotsContainer = styled(Container)`
  padding-bottom: 50px;
`;

export const FullLoader = () => {
  return (
    <Wrapper>
      <FadeContainer>
        <FadeLoader
          color={Colors.primary}
          height={30}
          loading
          margin={15}
          radius={5}
          speedMultiplier={1}
          width={10}
        />
      </FadeContainer>
    </Wrapper>
  );
};

export const DotsLoader = () => {
  return (
    <DotsContainer>
      <BeatLoader color={Colors.primary} />
    </DotsContainer>
  );
};
