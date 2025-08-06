import React, { useState } from 'react';

function Hudini() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(prev => !prev);

  return (
    <div>
      <div>{show ? "Now you see me" : "Now you don't"}</div>
      <button onClick={toggleShow}>Change</button>
    </div>
  );
}

export default Hudini;