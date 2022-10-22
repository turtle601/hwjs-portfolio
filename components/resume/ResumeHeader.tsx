import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

type ResumHeaderType = { name: 'Education' | 'Project' | 'Share' };

const ResumeTitle = styled.h2`
  width: 100%;
  font-size: 3.5rem;

  &::after {
    content: '.';
    color: ${oc.teal[6]}
  }
`;

const ResumeLine = styled.div`
  width: 100%;
  height: 0.5rem;

  margin-top: 1.5rem;
  background-image: linear-gradient(90deg, ${oc.teal[6]} 20%, ${oc.cyan[6]} 80%);
  margin-bottom: 3rem;
`;

const ResumeHeader: React.FC<ResumHeaderType> = ({ name }) => {
  return (
    <>
      <ResumeTitle>{name}</ResumeTitle>
      <ResumeLine />
    </>
);
};

export default ResumeHeader;
