import React from 'react'
import parse from 'csv-parse'

import { tail, withIndex } from '../utils/misc'

const url =
  'https://raw.githubusercontent.com/mikemcgowan/memrise-scraper-scala/master/memrise_database.csv'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vocab: [],
    }
  }

  async componentDidMount() {
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
                {vocabItem[0] + 1} {vocabItem[1]}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
