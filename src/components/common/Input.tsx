/** @jsxImportSource @emotion/react */
import { HTMLInputTypeAttribute } from 'react';
import * as styles from './Input.styles';

type Props = {
  name: string;
  value: string;
  type: HTMLInputTypeAttribute;
  onChanged: (value: string) => void;
  minLength?: number;
  maxLength?: number;
};

export default function InputComponent(props: Props) {
  const { name, value, type, minLength, maxLength, onChanged } = props;

  return (
    <input
      type={type}
      name={name}
      defaultValue={value}
      minLength={minLength}
      maxLength={maxLength}
      onChange={(event) => onChanged(event.target.value)}
      css={styles.inputStyle}
    />
  );
}
