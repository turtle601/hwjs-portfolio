import { css } from 'styled-components';
import { shadow } from '@/stylesheets/utils';

import { ButtonStyleProps } from '@/types/common.types';

export const ButtonStyle = css<ButtonStyleProps>`
  width: max-content;
  outline: none;
  border: none;
  background-color: inherit;

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

    color: ${colorScheme};

    &:hover {
      background: ${colorScheme};
      color: white;
      ${shadow(1)};
    }
  `}
`;
