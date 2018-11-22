import React from 'react'
import parse from 'csv-parse'
import { graphql } from 'gatsby'

import { tail, withIndex } from '../utils/misc'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vocab: [],
    }
  }

  async componentDidMount() {
    const url = this.props.data.site.siteMetadata.url
    const rawVocab = await fetch(url).then(response => response.text())

    parse(rawVocab, (err, output) => {
      this.setState({
        vocab: tail(output).map(withIndex),
      })
    })
  }

  render() {
    const { vocab } = this.state
    return (
      <div>
        {vocab.length === 0 ? (
          <p>Loading vocab &hellip;</p>
        ) : (
          <ul>
            {vocab.map(vocabItem => (
              <li key={vocabItem[0]}>
                {vocabItem[0] + 1} {vocabItem[1]} {vocabItem[2]}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        url
      }
    }
  }
`
