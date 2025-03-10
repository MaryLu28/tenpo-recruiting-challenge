import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../shared/colors";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 50px;
  background-color: ${Colors.gray};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Arrow = styled.span`
  border-top: 2px solid ${Colors.primary};
  border-right: 2px solid ${Colors.primary};
  height: 20px;
  width: 20px;
  margin-bottom: -10px;
  transform: rotate(-45deg);
`;

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowGoTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showGoTop && (
        <Button onClick={scrollToTop}>
          <Arrow />
        </Button>
      )}
    </>
  );
};
export default GoTopButton;
