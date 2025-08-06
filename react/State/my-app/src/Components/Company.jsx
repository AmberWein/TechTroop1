import React from 'react'

const Company = ({ name, revenue }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Revenue: ${revenue}</p>
    </div>
  )
}

export default Company