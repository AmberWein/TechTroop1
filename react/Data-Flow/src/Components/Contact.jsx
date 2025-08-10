export default function Contact({ name , onClick}) {
  return (
    <div className="contact" onClick={onClick}>
      {name}
    </div>
  );
}