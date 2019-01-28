import React from 'react'

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

export default ({ text, term }) => (
  <td>
    {text.toLowerCase().includes(term.toLowerCase())
      ? hilight(text, term)
      : text}
  </td>
)
