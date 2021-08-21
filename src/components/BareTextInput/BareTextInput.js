import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  border: none;
  background-color: transparent;
`;

const BareTextInput = ({ children, onChange }) => (
  <StyledTextInput type="text" onChange={onChange}>
    {children}
  </StyledTextInput>
);

export default BareTextInput;
