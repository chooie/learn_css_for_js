/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Background />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale" index={0}>
            Sale
          </NavLink>
          <NavLink href="/new" index={1}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" index={2}>
            Men
          </NavLink>
          <NavLink href="/women" index={3}>
            Women
          </NavLink>
          <NavLink href="/kids" index={4}>
            Kids
          </NavLink>
          <NavLink href="/collections" index={5}>
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: inherit;
}
`;

const Background = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);

  animation: ${fadeIn} 1000ms;
  animation-fill-mode: backwards;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }

`;

const flip = keyframes`
  0% {
    transform: translateX(100%) rotateY(180deg);
  }

  100% {
    transform: translateX(0%) rotateY(0deg);
  }
`;

const Content = styled(DialogContent)`
  --slide-duration: 1000ms;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.motionAllowed} {
    transform-origin: center right;
    animation: ${flip} var(--slide-duration);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.04, 0.6, 0.64, 0.94);
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;

  animation: ${fadeIn} 1000ms;
  animation-delay: var(--slide-duration);
  animation-fill-mode: backwards;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.motionAllowed} {
    animation: ${fadeIn} 1000ms;
    animation-fill-mode: backwards;
    animation-delay: calc(
      var(--slide-duration) + ${(props) => +props.index * 200}ms
    );
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
