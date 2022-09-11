import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { shareState } from '@/atom/atom.resume';
import { SharedType } from '@/types/atom.types';

import * as ResumeStyle from '@/stylesheets/resume';

import ResumeHeader from '@/components/resume/ResumeHeader';

const ShareContainer = styled.div`
  margin-top: 5rem;
  ${ResumeStyle.Container}
`;

const ShareTitle = styled.h3`
  ${ResumeStyle.Title}
`;

const ShareType = styled.div`
  ${ResumeStyle.Type}
`;

const ShareExplain = styled.div`
  ${ResumeStyle.Explain}
`;

const ShareContent = styled.ul`
  li + li {
    margin-top: 4rem;
  }
`;

const Share: React.FC = () => {
  const shares = useRecoilValue<SharedType []>(shareState);

  return (
    <ShareContainer>
      <ResumeHeader name="Share" />
      <ShareContent>
        {
          shares.map((share) => {
            return (
              <li key={share.id}>
                <ShareType>{share.type}</ShareType>
                <ShareTitle>{share.title}</ShareTitle>
                {
                  share.explains.map((explain) => {
                    return <ShareExplain key={explain}>{explain}</ShareExplain>;
                  })
                }
              </li>
            );
          })
        }
      </ShareContent>
    </ShareContainer>
  );
};

export default Share;
