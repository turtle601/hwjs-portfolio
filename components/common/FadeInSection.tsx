import { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ReactProps } from '@/types/common.types';
import { fadeInAnimated } from '@/stylesheets/animations';
import { Container } from '@/stylesheets/resume';

type FadeInSectionStyleProps = {
  isVisible : boolean;
};

const FadeInSectionStyle = styled.article<FadeInSectionStyleProps>`
  ${Container}
  opacity: 0;

  ${(props) => {
    return props.isVisible && css`
      ${fadeInAnimated}
    `;
  }}
`;

const FadeInSection: React.FC<ReactProps> = ({ children }) => {
  const dom = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        if (dom.current) observer.unobserve(dom.current);
      }
    });

    if (dom.current) observer.observe(dom.current);
  }, []);

  return (<FadeInSectionStyle ref={dom} isVisible={visible}>{children}</FadeInSectionStyle>);
};

export default FadeInSection;
