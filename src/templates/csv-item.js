import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const { csvItem } = data
  return (
    <Layout>
      <ul>
        <li>{csvItem.data[0]}</li>
        <li>{csvItem.data[1]}</li>
        <li>{csvItem.data[2]}</li>
        <li>{csvItem.data[3]}</li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    csvItem(fields: { slug: { eq: $slug } }) {
      data
    }
  }
`
