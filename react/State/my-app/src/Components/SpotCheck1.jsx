import React from 'react';

const SpotCheck1 = () => {

  const logHover = () => {
    console.log("I was hovered!")
  }

  return (
    <button onMouseEnter={logHover}>Click me</button>
  );
}

export default SpotCheck1