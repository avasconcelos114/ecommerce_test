/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import HeaderSectionComponent from '../components/HeaderSection';
import ShoppingList from './ShoppingList/ShoppingList';
import AddShoppingItem from './AddShoppingItem/AddShoppingItem';

export default function Layout() {
  return (
    <main css={css`
      display: flex;
      flex-direction: column;
      max-width: 1080px;
      align-items: center;
      justify-items: center;
      margin: 0 auto;
    `}>
      <HeaderSectionComponent />
      <ShoppingList />
      <AddShoppingItem />
    </main>
  );
}