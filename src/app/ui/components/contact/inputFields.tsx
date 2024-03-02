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
        <label id={`label-${name}`}>{label}</label>
        <input
          type={type}
          name={name}
          onChange={action}
          aria-labelledby={`label-${name}`}
        />
        <Warning
          show={warning && isOnFocus}
          message={warningMessage}
        />
      </div>
    </>
  );
}
