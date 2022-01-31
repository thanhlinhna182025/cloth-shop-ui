import { css } from "styled-components";

export const Tworow = () => {
  return css`
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `;
};
