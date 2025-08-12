import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Entities({ getCategoryData }) {
  const { category } = useParams();

  const data = getCategoryData ? getCategoryData(category) : [];

  return (
    <div>
      <h2>Items in category: {category}</h2>
      <ul>
        {data.map(item => (
          <li key={item.name}>
           <Link to={`/wiki/${category}/${encodeURIComponent(item.name)}`}>
  {item.name}
</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Entities;