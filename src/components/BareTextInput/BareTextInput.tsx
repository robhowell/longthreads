import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input<{
  $fullWidth?: boolean;
}>`
  border: none;
  background-color: transparent;
  ${({ $fullWidth }) => $fullWidth && `width: 100%`}
`;

interface BareTextInputProps {
  fullWidth: boolean;
  value: string;
  onChange: () => {};
}

const BareTextInput = ({
  fullWidth = false,
  value,
  onChange,
}: BareTextInputProps) => (
  <StyledTextInput onChange={onChange} value={value} $fullWidth={fullWidth} />
);

export default BareTextInput;
