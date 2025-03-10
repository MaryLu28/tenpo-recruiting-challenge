import { useEffect, useState } from "react";
import styled from "styled-components";

import largeLogo from "./tenpo-large-logo.svg";
import smallLogo from "./tenpo-small-logo.svg";

import { useAuth } from "../auth/auth-provider";
import { desktop, tablet } from "../breakpoints";
import { Colors } from "../colors";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1140px;
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

const LogoutBtn = styled.button`
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
`;

const getLogoSource = () => {
  return window.innerWidth >= 768 ? largeLogo : smallLogo;
};

const Header = () => {
  const auth = useAuth();
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
      {auth.user && <LogoutBtn onClick={auth.signOut}>Cerrar sesión</LogoutBtn>}
    </Container>
  );
};

export default Header;
