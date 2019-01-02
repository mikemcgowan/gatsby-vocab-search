import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { setConfig } from 'react-hot-loader'

import Layout from '../components/layout'
import Table from '../components/table'
import Showing from '../components/showing'
import Row from '../components/milligram/row'
import Column from '../components/milligram/column'
import Button from '../components/milligram/button'
import SingleColumnRow from '../components/milligram/singleColumnRow'
import searchFn from '../utils/search'

// @see {@link https://github.com/gatsbyjs/gatsby/issues/9489}
setConfig({ pureSFC: true })

export default ({ data }) => {
  const [search, setSearch] = useState('')
  const allNodes = data.allCsvItem.edges.map(({ node }) => node)
  const nodes = searchFn(search, allNodes).slice(0, 100)
  return (
    <Layout>
      <Row>
        <Column>
          <input
            autoFocus
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </Column>
        <Column percent="25">
          <Button onClick={() => setSearch('')} disabled={search.length === 0}>
            Clear
          </Button>
        </Column>
      </Row>
      <SingleColumnRow percent="25">
        <Showing total={allNodes.length} current={nodes.length} term={search} />
      </SingleColumnRow>
      <SingleColumnRow>
        <Table nodes={nodes} term={search} />
      </SingleColumnRow>
    </Layout>
  )
}

export const query = graphql`
  query {
    allCsvItem {
      edges {
        node {
          data
          fields {
            slug
          }
        }
      }
    }
  }
`
