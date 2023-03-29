import React from 'react';
import './Button.css';

interface BtnProps {
  disabled?: boolean;
  name: string;
  clicked?: () => void;
}
const Button = ({disabled, name, clicked}: BtnProps) => {
  return (
    <button className='Button' onClick={clicked} disabled={disabled}>
      Click { name }
    </button>
  );
};

export default Button;