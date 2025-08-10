export default function List({ contacts }) {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
}
