import React from 'react'

export default ({ children, ...rest }) => (
  <button className="button" {...rest}>
    {children}
  </button>
)
