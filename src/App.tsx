import { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/open-sans";
import "./App.css";

import {
  BaseContainer,
  BaseContent,
  MainContainer,
} from "./shared/common-components";
import Header from "./shared/header";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <MainContainer>
      <Header />
      <BaseContainer>
        <BaseContent>{children}</BaseContent>
      </BaseContainer>
    </MainContainer>
  );
};

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/login" element={<>Login</>} />
          <Route path="/" element={<>home</>} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
