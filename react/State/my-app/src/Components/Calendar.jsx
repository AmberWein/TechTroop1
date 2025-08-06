import React from 'react'

function Calendar({ reservations }) {
  return (
    <div id="calendar">
      <h3>Calendar</h3>
      {reservations.map(r => (
        <div key={r.name}>
          {r.name} has a reservation on {r.day} at {r.time}
        </div>
      ))}
    </div>
  );
}

export default Calendar;