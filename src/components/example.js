import React from 'react'

const elem = 2

export default ({ nodes }) => {
  if (nodes.length !== 1 || nodes[0].data[elem].length < 1) {
    return null
  }
  return <blockquote>{nodes[0].data[elem]}</blockquote>
}
