import React from 'react';

export default function Question({ children, onAddBill, bill }) {
  const handleChange = value => {
    onAddBill(value);
  };

  return (
    <>
      <label htmlFor="question1">{children}</label>
      <input
        type="text"
        id="question1"
        value={bill}
        onChange={e => handleChange(e.target.value)}
      />
    </>
  );
}
