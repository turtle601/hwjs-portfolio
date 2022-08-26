import React from 'react';

import styled from 'styled-components';

import { ButtonStyle } from '@/stylesheets/button';
import { ButtonStyleProps, ReactProps } from '@/types/common.types';

type ButtonProps
  = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps & ReactProps;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
