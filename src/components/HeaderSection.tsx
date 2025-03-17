/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '../logo.svg';

export default function HeaderSectionComponent() {
  return (
    <section css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}>
    <div css={css`
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}>
      <img src={logo} alt="Shopping List Logo" />
    </div>
    <div css={css`
        display: flex;
        align-items: center;
        justify-content: center;
    `}>
      <h1 css={css`
        font-size: 86px;
      `}>
        Shopping List
      </h1>
    </div>
  </section>
  )
}