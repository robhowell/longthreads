import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  border: none;
  background-color: transparent;
  ${({ $fullWidth }) => $fullWidth && `width: 100%`}
`;

const BareTextInput = ({ fullWidth = false, value, onChange }) => (
  <StyledTextInput
    type="text"
    onChange={onChange}
    value={value}
    $fullWidth={fullWidth}
  />
);

export default BareTextInput;
