export default function Conversation({ convo, sender, onBack }) {
  return (
    <div>
      <button className="back" onClick={onBack}>
        Back
      </button>

      <h2>Conversation with {sender}</h2>
      {convo.map((msg, index) => (
        <div key={index} className="message">
          <span className="sender">
            {msg.sender === "self" ? "Me" : sender}:
          </span>{" "}
          {msg.text}
        </div>
      ))}
    </div>
  );
}
