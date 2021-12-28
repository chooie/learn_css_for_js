/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MyDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MyDialogContent>
        <AbsoluteUnstyledButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </AbsoluteUnstyledButton>
        <Side></Side>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Side>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Side>
      </MyDialogContent>
    </MyDialogOverlay>
  );
};

const MyDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: ${COLORS.passThrough};
`;

const AbsoluteUnstyledButton = styled(UnstyledButton)`
  position: absolute;
  right: 20px;
`;

const MyDialogContent = styled(DialogContent)`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  height: 100%;
  width: 80%;
  background: ${COLORS.white};

  margin-left: auto;

  padding: 32px;
  padding-right: 20px;
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 20px;

  a {
    color: ${COLORS.gray[900]};

    text-decoration: none;
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
    font-weight: 600;
  }

  a:hover {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;

  width: 100%;
  height: 100%;

  a {
    color: ${COLORS.gray[700]};

    text-decoration: none;
    font-size: ${14 / 16}rem;
  }
`;

export default MobileMenu;
