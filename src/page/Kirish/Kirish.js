import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPage = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 5vh auto;
  box-shadow: 0px 0px 10px 5px #6c6c6c;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 600;
  }

  button {
    border: none;
    outline: none;
    border: 1px solid #fff200;
    background-color: white;
    padding: 8px 24px;
    font-size: 14px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 600;
    border-radius: 8px;
    color: #fcd12a;
    transition: 0.3s ease-in;
    &:hover {
      color: white;
      background-color: #fcd12a;
    }
  }
`;

export default function Kirish() {
  const navigate = useNavigate();
  return (
    <LoginPage>
      <h2>Express 24 ga xush kelibsiz!</h2>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Kirish
      </button>
    </LoginPage>
  );
}
