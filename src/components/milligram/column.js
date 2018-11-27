import React from 'react'

export default ({ percent, children }) => {
  if (!!percent) {
    return <div className={`column column-${percent}`}>{children}</div>
  } else {
    return <div className="column">{children}</div>
  }
}
