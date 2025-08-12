import React from 'react';
import { useParams } from 'react-router-dom';

function Entities({ getCategoryData }) {
  const { category } = useParams();
  // Fetch data based on the category
  const data = getCategoryData ? getCategoryData(category) : [];

  return (
    <div>
      <h2>Items in category: {category}</h2>
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Entities;