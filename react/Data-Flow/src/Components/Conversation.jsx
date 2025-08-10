export default function Conversation({ convo, sender }) {
  return (
    <div>
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