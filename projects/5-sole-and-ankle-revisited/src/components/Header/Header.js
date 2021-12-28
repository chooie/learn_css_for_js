import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

function MainHeader(props) {
  const { showMobileMenu, setShowMobileMenu } = props;

  return (
    <MainHeaderWrapper>
      <Smaller>
        <Logo />
        <Side />

        <ButtonsWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id={showMobileMenu ? "close" : "menu"} strokeWidth={2} />
          </UnstyledButton>
        </ButtonsWrapper>
      </Smaller>
      <Larger>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </Larger>
    </MainHeaderWrapper>
  );
}

const MainHeaderWrapper = styled.div`
  overflow-x: auto;

  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Smaller = styled.div`
  display: none;
  padding: 18px 32px;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    padding: 18px 32px;
  }

  @media ${QUERIES.mobileAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 40px;

  @media ${QUERIES.mobileAndDown} {
    gap: 20px;
  }
`;

const Larger = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Nav = styled.nav`
  --spacing: clamp(5px, 8vw - 1rem, 48px);

  display: flex;
  gap: var(--spacing);
  margin: 0px var(--spacing);

  & a:last-of-type {
    padding-right: 32px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
