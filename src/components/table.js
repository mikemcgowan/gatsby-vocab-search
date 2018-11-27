import React from 'react'

export default ({ nodes }) => (
  <table>
    <thead>
      <tr>
        <th style={{width: '40%'}}>Polish</th>
        <th>English</th>
      </tr>
    </thead>
    <tbody>
      {nodes.map((node, index) => (
        <tr key={index}>
          <td>{node.data[0]}</td>
          <td>{node.data[1]}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
