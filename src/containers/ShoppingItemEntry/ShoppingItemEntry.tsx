/** @jsxImportSource @emotion/react */
import { useMemo, useState } from "react";
import { useAppDispatch } from '../../lib/hooks/store';
import { removeItem, updateItem, addItem } from '../../store/shoppingList';

import PrimaryButton from "../../components/common/PrimaryButton";
import Input from "../../components/common/Input";
import * as styles from '../Layout.styles';

import type { ShoppingItem } from "../../lib/types";

type Props = {
  item?: ShoppingItem,
  type: 'list-view' | 'add',
}

export default function ShoppingItemEntryContainer(props: Props) {
  const { item, type } = props;
  const dispatch = useAppDispatch();

  const [localItem, setLocalItem] = useState<ShoppingItem>({
    id: item?.id || '',
    name: item?.name || '',
    amount: item?.amount || 0,
  });

  function onClickDelete() {
    dispatch(removeItem(item?.id || ''));
  }

  function onClickAdd() {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name: localItem?.name || '',
      amount: localItem?.amount || 0,
    };
    dispatch(addItem(newItem));
  }

  function onNameFieldUpdated(name: string) {
    const updatedItem: ShoppingItem = {
      id: localItem.id,
      name: name,
      amount: localItem.amount,
    }
    updateValues(updatedItem);
  }

  function onAmountFieldUpdated(amount: string) {
    try {
      const parsedAmount = parseInt(amount);
      const updatedItem: ShoppingItem = {
        id: localItem.id,
        name: localItem.name,
        amount: parsedAmount,
      }
      updateValues(updatedItem);
    } catch {
      console.error('Failed to retrieve numerical amount from input');
    }
  }

  function updateValues(updatedItem: ShoppingItem) {
    if (type === 'add') {
      // Only setting the local item, which will be used later when adding an item to the list
      setLocalItem(updatedItem);
    } else if (type === 'list-view') {
      // Update redux state in real time
      dispatch(updateItem(updatedItem));
    }
  }

  const actionContents = useMemo(() => {
    switch (type) {
      case 'add':
        return <PrimaryButton label='Add' type='neutral' action={onClickAdd} />;
      case 'list-view':
        return <PrimaryButton label='Remove' type='delete' action={onClickDelete} />;
      default:
        return <div></div>;
    }
  }, [type]);

  return (
    <div css={[styles.spaceEvenlyStyle, styles.rowStyle, styles.marginSm]}>
      <div css={[styles.flexCenterStyle, styles.marginSm]}>
        <Input name='name' value={localItem.name} type='text' onChanged={onNameFieldUpdated} />
      </div>
      <div css={[styles.flexCenterStyle, styles.marginSm]}>
        <Input name='amount' value={`${localItem.amount}`} type='number' onChanged={onAmountFieldUpdated} />
      </div>
      <div css={[styles.flexCenterStyle, styles.actionColumnStyle]}>
        <div css={[styles.flexCenterStyle]}>
          {actionContents}
        </div>
      </div>
    </div>
  );
}