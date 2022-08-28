import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { ReactProps, ButtonStyleProps } from '@/types/common.types';
import { ButtonStyle } from '@/stylesheets/button';

type LinkProps = {
  href: string;
  target: boolean;
} & ReactProps & ButtonStyleProps;

const StyledLink = styled.a`
  ${ButtonStyle}
`;

const LinkButton: React.FC<LinkProps> = ({
    href, children, target, ...rest
  }) => {
  return (
    <Link href={href} passHref>
      <StyledLink target={target ? '_blank' : '_self'} href={href} {...rest}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default LinkButton;
