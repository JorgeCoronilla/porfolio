import React from 'react';
import styles from './button.module.css';
interface Props {
  isDisabled: boolean;
  text: string;
}
export const Button = ({ isDisabled, text }: Props) => {
  return (
    <button
      type="submit"
      value="Submit"
      disabled={isDisabled}
      className={isDisabled ? styles.disabledButton : ``}
    >
      {text}
    </button>
  );
};
