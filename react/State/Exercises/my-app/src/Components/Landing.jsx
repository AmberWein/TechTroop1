import React from 'react';

function Landing({ user, store }) {
  const hottestItem = store.find(item => item.hottest);

  return (
    <div>
      Welcome, {user}.
      The hottest item is {hottestItem ? hottestItem.item : 'No hottest item found'} for ${hottestItem.price}
    </div>
  );
}

export default Landing;