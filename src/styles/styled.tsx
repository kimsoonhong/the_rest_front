import { css } from "@emotion/react";

export const hoverEffect = css`
  &:hover {
    color: var(--gn3);
    -webkit-transition: 1.5s;
    transition: 1.5s;
    text-decoration-line: underline;
    animation: ease-in-out infinite;
  }
`;
