import React from 'react'
import { Link } from 'gatsby'

const hilight = (text, term) => {
  const i = text.toLowerCase().indexOf(term.toLowerCase())
  return (
    <>
      <span>{text.substr(0, i)}</span>
      <span>
        <strong>{text.substr(i, term.length)}</strong>
      </span>
      <span>{text.substr(i + term.length)}</span>
    </>
  )
}

export default ({ text, term, slug }) => (
  <td>
    <Link to={slug}>
      {text.toLowerCase().includes(term.toLowerCase())
        ? hilight(text, term)
        : text}
    </Link>
  </td>
)
