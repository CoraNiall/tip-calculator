import React from 'react';
import '../index.css';

export default function Question({ children, onAddBill, bill }) {
  const handleChange = value => {
    onAddBill(value);
  };

  return (
    <li>
      <label htmlFor="question1">{children}</label>
      <input
        type="text"
        id="question1"
        value={bill}
        onChange={e => handleChange(e.target.value)}
      />
    </li>
  );
}
