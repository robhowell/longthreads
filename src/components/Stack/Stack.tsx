import React from 'react';
import styled from 'styled-components';

const Stack = styled.div`
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export default Stack;