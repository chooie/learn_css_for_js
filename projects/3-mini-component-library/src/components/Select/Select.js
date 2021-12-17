import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const size = 16;

  return (
    <Wrapper style={{ "--size": `${size}px` }}>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper>
        <Icon id="chevron-down" size={size} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.span`
  cursor: pointer;

  position: absolute;
  bottom: 0;
  right: 16px;

  height: min-content;
  width: min-content;
`;

const SelectWrapper = styled.select`
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */

  position: relative;

  padding: 12px 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: calc(2 * 16px + var(--size));

  color: inherit;
  font-size: 1rem;

  ${Wrapper} & {
    position: relative;
    border: none;

    border-radius: 8px;

    background: ${COLORS.transparentGray15};
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:hover ~ ${IconWrapper} {
    color: ${COLORS.black};
  }
`;

export default Select;
