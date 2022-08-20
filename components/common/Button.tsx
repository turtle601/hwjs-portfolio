import React from 'react';

import styled, { css } from 'styled-components';

import { shadow } from '../../lib/stylesheets/utils';
import { ReactProps } from '@/types/common.types';

type ButtonProps = {
  href ?: string;
  variant : 'solid' | 'outline' | 'link';
  colorScheme : string;
};

const buttonStyle = css<ButtonProps>`
  outline: none;
  border: none;

  white-space: nowrap;
  font-weight: 600;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  border-radius: 2px;
  cursor: pointer;
  transition: .2s all;

  &:active {
    /* 마우스 클릭 시 아래로 미세하기 움직임 */
    transform: translateY(3px);
  }

  ${({ variant, colorScheme }) => (variant === 'solid') && css`
    background-color: ${colorScheme};
    color: white;

    &:hover {
      background-color: white;
      color: ${colorScheme}};
      ${shadow(1)};
    }
  `}

  ${({ variant, colorScheme }) => (variant === 'outline' || variant === 'link') && css`
    background-color: white;
    color: ${colorScheme};

    &:hover {
      background: ${colorScheme};
      color: white;
      ${shadow(1)};
    }
  `}

  
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled.a`
  ${buttonStyle}
`;

const Button = (props: ButtonProps & ReactProps) => {
  const { variant, children } = props;

  return ((variant !== 'link')
    ? <StyledButton type="button" {...props}>{children}</StyledButton>
    : <StyledLink {...props}>{children}</StyledLink>
  );
};

export default Button;
