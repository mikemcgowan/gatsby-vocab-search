import React from 'react'

import HilightedCell from './hilightedCell'

export default ({ nodes, term }) => {
  if (nodes.length === 0) {
    return null
  }
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Polish</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        {nodes.map((node, index) => (
          <tr key={index}>
            <HilightedCell text={node.data[0]} term={term} />
            <HilightedCell text={node.data[1]} term={term} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
