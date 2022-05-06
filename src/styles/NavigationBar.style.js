import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const NavBarLink = styled(Link)`
  color: white;
  &:hover {
    color: blue;
  }
  text-decoration: none;
  font-size: large;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: white;
  &:hover {
    color: blue;
  }
  text-decoration: none;
  font-size: large;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const OpenLinkButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavBarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
