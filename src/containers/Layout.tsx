/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import HeaderSectionComponent from '../components/HeaderSection';
export default function Layout() {
  return (
    <main css={css`
      display: flex;
      flex-direction: column;
    `}>
      <HeaderSectionComponent />
      <section>

      </section>
      <section>

      </section>
    </main>
  );
}