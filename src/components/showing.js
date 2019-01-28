import React from 'react'

const abbrevs = [
  [/^m /, 'masculine '],
  [/^f /, 'feminine '],
  [/^n /, 'neuter '],
  [/^perf /, 'perfective '],
]

export default ({ total, term, nodes }) => {
  switch (nodes.length) {
    case 0:
      return <small>{`${total} vocab items`}</small>
    case 1:
      let typ = nodes[0].data[3]
      abbrevs.forEach(([expr, repl]) => {
        typ = typ.replace(expr, repl)
      })
      return (
        <small>
          {`Showing 1 `}
          <strong>{typ}</strong>
          {` matching "${term}"`}
        </small>
      )
    default:
      return <small>{`Showing ${nodes.length} items matching "${term}"`}</small>
  }
}
