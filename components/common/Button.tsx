import React from 'react';

import styled, { css } from 'styled-components';

import Link from 'next/link';
import { shadow } from '@/stylesheets/utils';
import { AnchorAttrProps, BtnAttrProps, ReactProps } from '@/types/common.types';

type ButtonStyleProps = {
  href ?: string;
  variant : 'solid' | 'outline' | 'link';
  colorScheme : string;
};

type ButtonProps = ButtonStyleProps & ReactProps & BtnAttrProps & AnchorAttrProps;

const buttonStyle = css<ButtonStyleProps>`
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
    background-color: inherit;
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

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, children, href } = props;

  return ((variant === 'link' && href !== undefined)
    ? (
      <Link href={href} passHref>
        <StyledLink {...props}>{children}</StyledLink>
      </Link>
    )
    : <StyledButton type="button" {...props}>{children}</StyledButton>
  );
};

export default Button;
