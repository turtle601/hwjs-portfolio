import { css } from 'styled-components';
import { sizes } from '@/stylesheets/utils';

export const Container = css`
  width: 100%;
  font-size: 1.5rem;

  padding-left: 2rem;
  padding-right: 2rem;

  @media only screen and (min-width: ${sizes.wide}) {
    width: ${sizes.wide};
  }

  margin: 2rem auto;

  div + div {
    margin-top: 1.2rem;
  }

  h3 + div {
    margin-top: 1.2rem;
  }

  @media only screen and (max-width: ${sizes.desktop}) {
    font-size: 1.2rem;
  }
`;

export const Title = css`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;

  @media only screen and (max-width: ${sizes.desktop}) {
    font-size: 2rem;
  }
`;

export const Type = css``;

export const Explain = css`
  display: block;
  white-space: pre-wrap;

  &::before {
    display: inline;
    content: url("data:image/svg+xml,%3Csvg width='18px' height='18px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M43 11L16.875 37L5 25.1818' stroke='teal' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");    
    margin-right: 0.5rem;
    
  }

  line-height: 1.5rem;
`;

export const WorryTitle = css`
  margin-top: 1.5rem;

  &::before {
    content: url("data:image/svg+xml,%3Csvg width='20px' height='20px' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 53 53' style='enable-background:new 0 0 53 53;' xml:space='preserve'%3E%3Cpath style='fill:%23EFCE4A;' d='M26.5,9c-8.837,0-16,7.164-16,16c0,7.089,4.615,13.091,11,15.192V50h2v3h6v-3h2v-9.808 c6.385-2.101,11-8.103,11-15.192C42.5,16.164,35.337,9,26.5,9z'/%3E%3Cg%3E%3Cpath style='fill:%23EFCE4A;' d='M26.5,0c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1s1-0.447,1-1V1C27.5,0.447,27.053,0,26.5,0z'/%3E%3Cpath style='fill:%23EFCE4A;' d='M50.5,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S51.053,24,50.5,24z'/%3E%3Cpath style='fill:%23EFCE4A;' d='M6.5,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S7.053,24,6.5,24z'/%3E%3Cpath style='fill:%23EFCE4A;' d='M42.764,7.322l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S43.154,6.932,42.764,7.322z'/%3E%3Cpath style='fill:%23EFCE4A;' d='M11.65,38.436l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S12.041,38.045,11.65,38.436z'/%3E%3Cpath style='fill:%23EFCE4A;' d='M41.35,38.436c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L41.35,38.436z'/%3E%3Cpath style='fill:%23EFCE4A;' d='M10.236,7.322c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L10.236,7.322z'/%3E%3C/g%3E%3Cpath style='fill:%23F7E6A1;' d='M15.5,26c-0.553,0-1-0.447-1-1c0-6.617,5.383-12,12-12c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-5.514,0-10,4.486-10,10C16.5,25.553,16.053,26,15.5,26z'/%3E%3Cpolygon style='fill:%23556080;' points='21.5,43 21.5,50 23.5,50 23.5,53 29.5,53 29.5,50 31.5,50 31.5,43 '/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A");
    margin-right: 0.5rem;
  }
`;

export const ReadmeTitle = css`
  margin-top: 1.2rem;

  &::before {
    content: url("data:image/svg+xml,%3Csvg fill='gray' width='20px' height='20px' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 5 6 C 3.346 6 2 7.346 2 9 L 2 21 C 2 22.654 3.346 24 5 24 L 11.183594 23.980469 C 12.173594 23.980469 13.133031 24.290844 13.957031 24.839844 L 16 26.201172 L 18.042969 24.839844 C 18.866969 24.290844 19.826406 24 20.816406 24 L 27 24 C 28.654 24 30 22.654 30 21 L 30 9 C 30 7.346 28.654 6 27 6 L 20.816406 6 C 19.430406 6 18.086594 6.4077813 16.933594 7.1757812 L 16 7.7988281 L 15.066406 7.1757812 C 13.912406 6.4067813 12.570594 6 11.183594 6 L 5 6 z M 5 8 L 11.183594 8 C 12.173594 8 13.133031 8.2908438 13.957031 8.8398438 L 16 10.201172 L 18.042969 8.8398438 C 18.866969 8.2908438 19.826406 8 20.816406 8 L 27 8 C 27.552 8 28 8.449 28 9 L 28 21 C 28 21.551 27.552 22 27 22 L 20.816406 22 C 19.430406 22 18.086594 22.407781 16.933594 23.175781 L 16 23.798828 L 15.066406 23.175781 C 13.912406 22.406781 12.570594 22 11.183594 22 L 5 22 C 4.448 22 4 21.551 4 21 L 4 9 C 4 8.449 4.448 8 5 8 z M 6 12 L 6 14 L 14 14 L 14 12 L 6 12 z M 18 12 L 18 14 L 26 14 L 26 12 L 18 12 z M 6 16 L 6 18 L 14 18 L 14 16 L 6 16 z M 18 16 L 18 18 L 26 18 L 26 16 L 18 16 z'/%3E%3C/svg%3E%0A");
    margin-right: 0.5rem;
  }
`;

export const LinkStyletag = css`
  margin-top: 1.2rem;

  & + & {
    margin-top: 1.2rem;
  }
`;
