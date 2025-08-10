import Contact from "./Contact";

export default function List({ contacts, onContactClick}) {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((name, index) => (
        <Contact key={index} name={name} onClick={() => onContactClick(name)} />
      ))}
    </div>
  );
}
