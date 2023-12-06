import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.div`
  height: 9vh;
  /* background-color: yellow; */
  box-shadow: 0px 2px 5px 0px gray;
  display: flex;
`;

export default function Header() {
  return (
    <HeaderBox>
      <Link>
        <i class="bi bi-menu-button-wide">s</i>
      </Link>
    </HeaderBox>
  );
}
