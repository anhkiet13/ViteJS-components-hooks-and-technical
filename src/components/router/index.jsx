import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainRoutes, LoginRoutes } from "../../utils/routes";
import styled from "styled-components";

const Layout = () => {
  return (
    <MainLayout>
      <Routes>
        {MainRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
            exc
          />
        ))}
        {LoginRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
            exc
          />
        ))}
      </Routes>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f1f1f1ea;
`;

export default Layout;
