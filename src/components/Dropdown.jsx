import React from 'react';
import '../index.css';

export default function Dropdown({ children, onAddTip }) {
  return (
    <li>
      <label htmlFor="question1">{children}</label>
      <select id="question1" onChange={e => onAddTip(e.target.value)}>
        <option value="0">Select an option...</option>
        <option value="5">Not at all</option>
        <option value="10">It was good. I liked it</option>
        <option value="20">It was fantastic. Best ever</option>
      </select>
    </li>
  );
}
