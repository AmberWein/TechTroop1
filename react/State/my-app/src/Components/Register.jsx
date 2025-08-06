import React from 'react'

function Register({ reservations }) {
  return (
    <div id="register">
      <h3>You cannot reserve during these times:</h3>
      {reservations.map(r => (
        <div key={r.name}>
          {r.day} at {r.time}
        </div>
      ))}
    </div>
  );
}

export default Register;