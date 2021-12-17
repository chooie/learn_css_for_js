/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>

      <BarWrapper size={size}>
        <Bar size={size} value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const SIZES = {
  small: {
    height: "8px",
    radius: "4px",
  },
  medium: {
    height: "12px",
    radius: "4px",
  },
  large: {
    height: "24px",
    radius: "8px",
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: ${(p) => SIZES[p.size].height};

  padding: ${(p) => (p.size === "large" ? "4px" : 0)};
  border-radius: ${(p) => SIZES[p.size].radius};

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  /* Trim off corners when progress bar is close to being 100% */
  overflow: hidden;

  width: 100%;
  height: 100%;

  border-radius: 4px;
`;

const Bar = styled.div`
  width: ${(p) => p.value}%;
  height: 100%;

  border-radius: 4px 0px 0px 4px;

  background-color: ${COLORS.primary};
`;

export default ProgressBar;
