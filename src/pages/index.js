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
      <button type="button" onClick={() => setSearch('')}>
        Clear
      </button>
      <input type="text" onChange={e => setSearch(e.target.value)} value={search} />
      <Table nodes={searchFn(search, nodes)} />
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
