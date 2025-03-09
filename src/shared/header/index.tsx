import styled from "styled-components";
import largeLogo from "./tenpo-large-logo.svg";
import smallLogo from "./tenpo-small-logo.svg";
import { useEffect, useState } from "react";
import { desktop, tablet } from "../breakpoints";

const Container = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${tablet}) {
    height: 70px;
    padding: 0 50px;
  }
`;

const Icon = styled.img`
  width: auto;
  height: 35px;
  max-height: 100%;

  @media (${tablet}) {
    height: 45px;
  }

  @media (${desktop}) {
    height: 50px;
  }
`;

const getLogoSource = () => {
  return window.innerWidth >= 768 ? largeLogo : smallLogo;
};

const Header = () => {
  const [logoSrc, setLogoSrc] = useState(getLogoSource());

  useEffect(() => {
    const handleResize = () => {
      setLogoSrc(getLogoSource());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Icon src={logoSrc} alt="Tenpo logo" />
    </Container>
  );
};

export default Header;
