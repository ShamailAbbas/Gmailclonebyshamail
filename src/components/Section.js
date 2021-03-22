import React from 'react'
import '../css/Section.css'
import { Link } from 'react-router-dom'
function Section({ Icon, title, color, selected }) {
  return (
    <Link to={`/inbox/${title}`}>
      <div
        className={`section ${selected && 'section--selected'}`}
        style={{
          borderBottom: `3px solid ${color}`,
          color: `${selected && color}`,
        }}
      >
        <Icon />
        <h4>{title}</h4>
      </div>
    </Link>
  )
}
export default Section
