/** @jsxImportSource @emotion/react */
import ShoppingItemEntry from '../ShoppingItemEntry/ShoppingItemEntry';
import { useAppSelector } from '../../lib/hooks/store';
import { selectShoppingListItems } from '../../store/shoppingList';

import * as styles from '../Layout.styles';

export default function ShoppingListContainer() {
  const shoppingList = useAppSelector(selectShoppingListItems);

  return (
    <section css={[styles.flexCenterStyle, styles.columnStyle]}>
      <div css={[styles.spaceEvenlyStyle, styles.rowStyle, styles.marginSm, styles.borderBottomStyle]}>
        <div css={styles.flexCenterStyle}>
          <h3>Name</h3>
        </div>
        <div css={styles.flexCenterStyle}>
          <h3>
            Amount
          </h3>
        </div>
        <div css={[styles.flexCenterStyle, styles.actionColumnStyle]}>
          <h3>Action</h3>
        </div>
      </div>
      <div css={[styles.spaceEvenlyStyle, styles.columnStyle, styles.marginSm]}>
        {
          shoppingList.map(item => {
            return <ShoppingItemEntry key={item.id} item={item} type='list-view' />
          })
        }
      </div>
    </section>
  );
}