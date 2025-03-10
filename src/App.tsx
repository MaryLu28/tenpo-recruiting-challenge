import { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/open-sans";
import "./App.css";

import AuthProvider from "./shared/auth/auth-provider";
import AuthRequired from "./shared/auth/auth-required";

import Home from "./pages/home";
import Login from "./pages/login";

import {
  BaseContainer,
  BaseContent,
  MainContainer,
} from "./components/containers";
import Header from "./shared/header";
import Footer from "./shared/footer";

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
      <Footer />
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
            <Route
              path="/"
              element={
                <AuthRequired>
                  <Home />
                </AuthRequired>
              }
            />
          </Routes>
        </Router>
      </Layout>
    </AuthProvider>
  );
}

export default App;
