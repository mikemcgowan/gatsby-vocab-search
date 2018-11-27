import React from 'react'

export default ({ current, total, term }) => (
  <small>
    {current === 0
      ? `${total} vocab items`
      : `Showing ${current} item${current === 1 ? '' : 's'} matching "${term}"`}
  </small>
)
