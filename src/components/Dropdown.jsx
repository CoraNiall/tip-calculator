import React from 'react';

export default function Dropdown({ children, onAddTip }) {
  return (
    <>
      <label htmlFor="question1">{children}</label>
      <select id="question1" onChange={e => onAddTip(e.target.value)}>
        <option value="0">Not at all</option>
        <option value="10">It was good. I liked it</option>
        <option value="20">It was fantastic. Best ever</option>
      </select>
    </>
  );
}
