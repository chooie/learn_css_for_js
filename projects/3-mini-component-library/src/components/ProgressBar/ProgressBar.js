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
      <Bar size={size} value={value} />
      <LargeVariantWrapper size={size} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

/**
 * We need to overlay this over the bar so that the bar can seamlessly start
 * rounding as it overflows under this border wrapper.
 *
 * When we just used the border, it didn't look right
 */
function LargeVariantWrapper({ size }) {
  if (size === "small" || size === "medium") {
    return null;
  }

  return <LargeVariantBorderContainer></LargeVariantBorderContainer>;
}

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
  overflow: hidden;
  position: relative;

  width: 100%;
  height: ${(p) => SIZES[p.size].height};

  border-radius: ${(p) => SIZES[p.size].radius};
  background-color: ${COLORS.gray50};
`;

const LargeVariantBorderContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  border: 4px solid ${COLORS.gray50};
  border-radius: 8px;
`;

const Bar = styled.div`
  position: absolute;
  left: ${(p) => setPosition(p.size)};
  top: ${(p) => setPosition(p.size)};

  width: ${(p) => setBarWidth(p)};
  height: ${(p) => setBarHeight(p.size)};

  border-radius: 4px 0px 0px 4px;

  background-color: ${COLORS.primary};
`;

function setPosition(size) {
  if (size === "large") {
    return "4px";
  }

  return 0;
}

function setBarWidth(p) {
  const width = `${p.value}%`;

  if (p.size === "large") {
    return `max(calc(${width} - 8px), 1px)`;
  }

  return width;
}

function setBarHeight(size) {
  if (size === "large") {
    return `calc(${SIZES[size].height} - 8px)`;
  }

  return "100%";
}

export default ProgressBar;
