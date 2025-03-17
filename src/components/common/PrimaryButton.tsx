/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import * as styles from './PrimaryButton.styles';

type Props = {
  label: string;
  action: () => void;
  type: 'neutral' | 'delete';
}

export default function PrimaryButtonComponent(props: Props) {
  const { label, action, type } = props;

  const buttonStyles = useMemo(() => {
    const result = [styles.primaryButtonStyle];
    switch (type) {
      case 'neutral':
        result.push(styles.neutralButtonStyle);
        break;
      case 'delete':
        result.push(styles.deleteButtonStyle);
        break;
    }

    return result;
  }, [type]);

  return (
    <button
      css={buttonStyles}
      onClick={action}
    >
      { label }
    </button>
  );
}