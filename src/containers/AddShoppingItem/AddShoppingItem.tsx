/** @jsxImportSource @emotion/react */
import ShoppingItemEntry from '../ShoppingItemEntry/ShoppingItemEntry';

import * as styles from '../Layout.styles';

export default function AddShoppingItemContainer() {
  return (
    <section css={[styles.flexCenterStyle, styles.columnStyle]}>
      <div css={[styles.flexStartStyle, styles.marginSm, styles.borderBottomStyle]}>
        <h2>Add New Products</h2>
      </div>

      <div css={[styles.spaceEvenlyStyle, styles.columnStyle, styles.marginSm]}>
        <ShoppingItemEntry type='add' />
      </div>
    </section>
  );
}