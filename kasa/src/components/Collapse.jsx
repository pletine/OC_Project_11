import React, { useState } from 'react';
import '../styles/Collapse.scss';

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`collapse ${open ? 'open' : ''}`} onClick={toggleOpen}>
      <h2>{title}</h2>
      {open && <div>{content}</div>}
    </div>
  );
};

export default Collapse;
