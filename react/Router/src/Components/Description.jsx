import { useParams } from 'react-router-dom';

function Description({ getCategoryData }) {
  const { category, item } = useParams();
  const decodedItem = decodeURIComponent(item);

  const data = getCategoryData ? getCategoryData(category) : [];

  const selectedItem = data.find(i => i.name === item);

  return (
    <div>
      <h2>Description of {item}</h2>
      {selectedItem ? (
        <p>{selectedItem.description || 'No description available.'}</p>
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
}

export default Description;