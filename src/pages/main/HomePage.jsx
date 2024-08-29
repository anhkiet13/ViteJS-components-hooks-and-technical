import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { buttonColor } from "../../styles/common";
import { useNavigate } from "react-router-dom";
import { MainRoutes, LoginRoutes } from "../../utils/routes";

const HomePage = () => {
  const navigateTo = useNavigate();

  const handleOnClick = (title) => {
    for (const i of MainRoutes) {
      if (i.path.includes(title.toLowerCase())) {
        navigateTo(i.path);
      }
    }
    for (const i of LoginRoutes) {
      if (i.path.includes(title.toLowerCase())) {
        navigateTo(i.path);
      }
    }
  };

  return (
    <HomeWrapper>
      <Home>
        {buttonColor.map((item) => (
          <Button
            key={item.title}
            color={item.color}
            onClick={() => handleOnClick(item.title)}
          >
            {item.title}
          </Button>
        ))}
      </Home>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = styled.div`
  width: fit-content;
  background: #f3fcff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const Button = styled.button`
  width: fit-content;
  border-radius: 8px;
  border: 2px solid transparent;
  border-style: outset;
  border-color: ${(props) => props.color || "#469cff"};
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 600;
  color: black;
  background: ${(props) => props.color || "#469cff"};
  cursor: pointer;
  box-shadow: 3px 3px 8px #6b6b6b;
  transition: box-shadow 0.25s;

  &:hover {
    border-color: #dbdbdbe1;
  }

  &:active {
    box-shadow: none;
  }
`;

export default HomePage;
