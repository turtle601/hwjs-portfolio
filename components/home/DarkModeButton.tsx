import React from 'react';
import { useRecoilValue } from 'recoil';

import oc from 'open-color';
import styled from 'styled-components';
import { ReactProps } from '@/types/common.types';
import { themeState } from '@/atom/atom.theme';

import Button from '@/components/common/Button';

import { useSetDarkMode } from '@/hooks/useSetDarkMode';
import Blind from '../common/Blind';

const DarkModeStyledButton = styled(Button)`
  position: relative;
`;

const DarkModeButton: React.FC<ReactProps> = () => {
  const theme = useRecoilValue(themeState);
  const toggleTheme = useSetDarkMode();

  const clikcDarkModeBtn = () => toggleTheme();

  return (
    <DarkModeStyledButton variant="solid" colorScheme={oc.gray[5]} onClick={clikcDarkModeBtn}>
      {
        (theme === 'light')
        ? (
          <>
            <Blind>다크 모드 icon 이미지</Blind>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" width="16" height="12">
              <path d="M256.349,511.15C115.434,511.536,0.886,397.613,0.501,256.698S114.037,1.235,254.953,0.85  c43.566-0.119,86.436,10.919,124.528,32.062l33.021,18.328l-32.829,18.711c-96.889,55.013-130.835,178.154-75.822,275.043  c21.18,37.301,53.697,66.881,92.832,84.444l34.467,15.543l-31.192,21.263C357.74,495.411,307.661,511.071,256.349,511.15z   M256.349,43.373c-117.43,0-212.626,95.196-212.626,212.626s95.196,212.626,212.626,212.626c30.519,0.005,60.67-6.657,88.346-19.519  c-112.509-74.287-143.493-225.715-69.206-338.224c13.888-21.034,30.95-39.79,50.58-55.601  C303.681,47.355,280.099,43.327,256.349,43.373z M411.566,207.095l24.813,49.606l24.835-49.606l49.606-24.813l-49.606-24.835  l-24.813-49.606l-24.835,49.606l-49.584,24.813L411.566,207.095z M490.237,362.312c-11.743,0-21.263,9.52-21.263,21.263  s9.52,21.263,21.263,21.263s21.263-9.52,21.263-21.263S501.98,362.312,490.237,362.312z M362.662,277.262  c-11.743,0-21.263,9.52-21.263,21.263s9.52,21.263,21.263,21.263c11.743,0,21.263-9.52,21.263-21.263  S374.405,277.262,362.662,277.262z" />
            </svg>
          </>
        )
        : (
          <>
            <Blind>라이트 모드 icon 이미지</Blind>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="12">
              <path d="M24,13V11H18.928a6.927,6.927,0,0,0-.438-1.621l4.392-2.557L21.876,5.094,17.482,7.652a7.077,7.077,0,0,0-1.142-1.14l2.55-4.385L17.162,1.121l-2.55,4.385A6.91,6.91,0,0,0,13,5.072V0H11V5.072A6.908,6.908,0,0,0,9.4,5.5L6.854,1.121,5.126,2.127,7.671,6.5A7.046,7.046,0,0,0,6.524,7.646L2.14,5.094,1.134,6.822,5.513,9.371A6.9,6.9,0,0,0,5.072,11H0v2H5.072a6.948,6.948,0,0,0,.438,1.622L1.141,17.165l1.006,1.729,4.372-2.546a7.028,7.028,0,0,0,1.13,1.131L5.1,21.865l1.729,1.006,2.548-4.382A6.912,6.912,0,0,0,11,18.928V24h2V18.928a6.918,6.918,0,0,0,1.638-.445l2.552,4.388,1.728-1.006L16.362,17.47a7.06,7.06,0,0,0,1.125-1.128l4.383,2.552,1-1.729-4.382-2.551A6.928,6.928,0,0,0,18.928,13Zm-7-1c-.21,6.608-9.791,6.606-10,0C7.21,5.392,16.791,5.394,17,12Z" />
            </svg>
          </>
        )
      }
    </DarkModeStyledButton>
  );
};

export default DarkModeButton;
