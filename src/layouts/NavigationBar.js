import React, { useState } from "react";
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarExtendedContainer,
  NavBarInnerContainer,
  NavBarLinkContainer,
  NavBarLink,
  Logo,
  OpenLinkButton,
  NavBarLinkExtended,
} from "../styles/NavigationBar.style";
import mobileLegends from "../assets/mobileLegends.webp";

const NavigationBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);

  return (
    <NavBarContainer extendNavBar={extendNavBar}>
      <NavBarInnerContainer>
        <LeftContainer>
          <NavBarLinkContainer>
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="/Add">Add Player</NavBarLink>
            <OpenLinkButton
              onClick={() => {
                setExtendNavBar((curr) => !curr);
              }}
            >
              {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinkButton>
          </NavBarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={mobileLegends}></Logo>
        </RightContainer>
      </NavBarInnerContainer>
      {extendNavBar && (
        <NavBarExtendedContainer>
          <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
          <NavBarLinkExtended to="/Add">Add Player</NavBarLinkExtended>
        </NavBarExtendedContainer>
      )}
    </NavBarContainer>
  );
};

export default NavigationBar;
