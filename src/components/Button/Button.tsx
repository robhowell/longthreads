import React, {ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode,
  type?: 'button'|'submit'|'reset'
}

const Button = ({children, type = 'button'}: ButtonProps) => (
  <button type={type}>{children}</button>
);

export default Button;