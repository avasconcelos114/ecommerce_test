/** @jsxImportSource @emotion/react */
import { HTMLInputTypeAttribute } from 'react';
import * as styles from './Input.styles';

type Props = {
  name: string;
  value: string;
  type: HTMLInputTypeAttribute;
  minLength?: number;
  maxLength?: number;
};

export default function InputComponent(props: Props) {
  const { name, value, type, minLength, maxLength } = props;

  return (
    <input
      type={type}
      name={name}
      value={value}
      minLength={minLength}
      maxLength={maxLength}
      css={styles.inputStyle}
    />
  );
}
