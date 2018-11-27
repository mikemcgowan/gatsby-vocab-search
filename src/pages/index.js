import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { setConfig } from 'react-hot-loader'

import Layout from '../components/layout'
import Table from '../components/table'
import searchFn from '../utils/search'

// @see {@link https://github.com/gatsbyjs/gatsby/issues/9489}
setConfig({ pureSFC: true })

export default ({ data }) => {
  const [search, setSearch] = useState('')
  const nodes = data.allCsvItem.edges.map(({ node }) => node)
  return (
    <Layout>
      <div className="row">
        <div className="column column-20">
          <button
            className="button"
            type="button"
            onClick={() => setSearch('')}
            disabled={search.length === 0}
          >
            Clear
          </button>
        </div>
        <div className="column column-80">
          <input
            autoFocus
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <small>{nodes.length} vocab items</small>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Table nodes={searchFn(search, nodes)} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allCsvItem {
      edges {
        node {
          data
        }
      }
    }
  }
`
