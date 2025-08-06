import React from 'react';

function Landing({ user, store }) {
  const hottestItem = store.find(item => item.hottest);

  return (
    <div>
      Welcome, {user}.<br />
      The hottest item is {hottestItem ? hottestItem.item : 'No hottest item'} for {hottestItem ? hottestItem.price : '-'}$
    </div>
  );
}

export default Landing;