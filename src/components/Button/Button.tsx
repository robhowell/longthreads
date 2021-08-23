import React, { ElementType, ReactNode } from "react";
import styled, { css } from "styled-components";
import { extraLightBlue, blue, grey } from "~/styles/colors";
import { spacing2, spacing4, spacing5, spacing6 } from "~/styles/spacing";

interface ButtonProps {
  as?: ElementType | keyof JSX.IntrinsicElements;
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  styling?: "primary" | "secondary" | "tertiary";
}

const StyledButton = styled.button<{
  $size?: ButtonProps["size"];
  $styling?: ButtonProps["styling"];
}>`
  background-color: ${blue};
  border: 1px solid ${blue};
  border-radius: 3px;
  color: white;
  font-size: 0.8rem;
  padding: ${spacing2} ${spacing5};

  ${({ $size }) =>
    $size === "sm" &&
    css`
      border-radius: 2px;
      font-size: 0.7rem;
      padding: ${spacing2} ${spacing4};
    `};

  ${({ $size }) =>
    $size === "lg" &&
    css`
      border-radius: 4px;
      font-size: 1rem;
      padding: ${spacing4} ${spacing6};
    `};

  ${({ $styling }) =>
    $styling === "secondary" &&
    css`
      background-color: ${extraLightBlue};
      border: 1px solid ${extraLightBlue};
      color: ${grey};
    `};

  ${({ $styling }) =>
    $styling === "tertiary" &&
    css`
      background-color: transparent;
      border: none;
      color: ${blue};
      padding: 0;
    `};

  &:hover {
    @media (hover: hover) {
      cursor: pointer;
    }
  }
`;

const Button = ({
  as,
  children,
  onClick,
  size = "md",
  styling = "primary",
  type = "button",
}: ButtonProps) => (
  <StyledButton
    as={as}
    onClick={onClick}
    $size={size}
    $styling={styling}
    type={type}
  >
    {children}
  </StyledButton>
);

export default Button;
