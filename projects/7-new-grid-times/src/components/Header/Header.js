import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <ResponsiveHeader />
    </header>
  );
};

function ResponsiveHeader() {
  return (
    <>
      <MobileHeader>
        <Logo />
      </MobileHeader>

      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <Link href="">Already a subscriber?</Link>
        </SubscribeWrapper>
      </DesktopHeader>
    </>
  );
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 64px;
  }
`;

const MobileHeader = styled(MainHeader)`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled(MainHeader)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    justify-content: space-between;
  }
`;

const SubscribeWrapper = styled.div`
  position: relative;
  top: -8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Link = styled.a`
  padding: 8px;
  text-decoration: underline;
`;

export default Header;
