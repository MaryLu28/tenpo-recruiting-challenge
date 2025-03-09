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
import Login from "./pages/login";
import AuthProvider from "./shared/auth/auth-provider";
import AuthRequired from "./shared/auth/auth-required";

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
    <AuthProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AuthRequired>home</AuthRequired>} />
          </Routes>
        </Router>
      </Layout>
    </AuthProvider>
  );
}

export default App;
