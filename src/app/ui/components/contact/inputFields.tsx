import React from 'react';
import Warning from './warning';
interface Props {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  name: string;
  warning: boolean;
  isOnFocus: boolean;
  warningMessage: string;
}
export default function InputFields({
  action,
  label,
  type,
  name,
  warning,
  isOnFocus,
  warningMessage,
}: Props) {
  return (
    <>
      <div>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          onChange={action}
        />
        <Warning
          show={warning && isOnFocus}
          message={warningMessage}
        />
      </div>
    </>
  );
}
