import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

export default ({ data }) => {
  const x = getRandomInt(data.allCsvItem.edges.length)
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Polish</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {data.allCsvItem.edges.slice(x, x + 10).map(({ node }, index) => (
            <tr key={index}>
              <td>{node.data[0]}</td>
              <td>{node.data[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
