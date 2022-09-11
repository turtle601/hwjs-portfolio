import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media, sizes } from '@/stylesheets/utils';

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 2rem;
  padding-right: 2rem;

  width: ${sizes.wide};

  @media ${media.wide} {
    width: 100%;
  }

  div + div {
    margin-top: 1.2rem;
  }

  h3 + div {
    margin-top: 1.2rem;
  }

  margin-top: 5rem;
`;

const ShareTitle = styled.h2`
  font-size: 5rem;

  &::after {
    content: '.';
    color: ${oc.teal[6]}
  }
`;

const ShareLine = styled.div`
  width: 100%;
  height: 0.5rem;

  margin-top: 2rem;
  background-image: linear-gradient(90deg, ${oc.teal[6]} 20%, ${oc.cyan[6]} 80%);
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const ShareExplain = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;

  &::before {
    content: url("data:image/svg+xml,%3Csvg width='18px' height='18px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M43 11L16.875 37L5 25.1818' stroke='teal' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");    
    margin-right: 0.5rem;
    
  }

  line-height: 1.5rem;
`;

const ShareType = styled.div`
  font-size: 1.5rem;
`;

const Share: React.FC = () => {
  return (
    <ShareContainer>
      <ShareTitle>Share</ShareTitle>
      <ShareLine />

      <ShareType>블로그</ShareType>
      <Title>벨로그</Title>
      <ShareExplain>asdjfkld</ShareExplain>
      <ShareExplain>asdjfkld</ShareExplain>

    </ShareContainer>
  );
};

export default Share;
