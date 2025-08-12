import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        <li><Link to="/wiki/potions">Potions</Link></li>
        <li><Link to="/wiki/charms">Charms</Link></li>
      </ul>
    </div>
  );
}

export default CategoryList;