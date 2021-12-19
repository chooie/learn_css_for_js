import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    iconSize: 10,
    iconPadding: "10px",
    thickness: "1",
    fontSize: `${14 / 16}rem`,
  },
  large: {
    iconSize: 16,
    iconPadding: "15px",
    thickness: "2",
    fontSize: `${18 / 16}rem`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const STYLES = SIZES[size];
  const thickness = STYLES.thickness;
  return (
    <Wrapper
      width={width}
      aria-label={label}
      style={{
        "--thickness": `${thickness}px`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={STYLES.iconSize} strokeWidth={thickness} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{
          "--font-size": STYLES.fontSize,
          "--spacing": `calc(${STYLES.iconPadding} + ${STYLES.iconSize}px)`,
        }}
      />
      <Border />
      <FocusOutline />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  white-space: nowrap;

  width: ${(p) => `${p.width}px`};

  &,
  & input {
    color: ${COLORS.gray700};
  }

  &:hover,
  &:hover input {
    color: ${COLORS.black};
  }
`;

const spacerStyles = css`
  padding: 0;
  border: none;
  margin: 0;

  padding-top: var(--thickness);
  padding-bottom: calc(2 * var(--thickness));
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  display: inline-flex;
  align-items: center;

  ${spacerStyles}
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;

  ${spacerStyles}

  padding-left: var(--spacing);

  outline: none;

  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
  }
`;

const overlayStyles = css`
  /* Don't block user selecting the input */
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const Border = styled.div`
  ${overlayStyles}

  border-bottom: var(--thickness) solid ${COLORS.black};
`;

const FocusOutline = styled.div`
  ${overlayStyles}

  ${Input}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

export default IconInput;
