const fetch = require('node-fetch')
const parse = require('csv-parse')

const head = xs => xs[0]
const tail = xs => xs.slice(1)
const withIndex = (item, index) => [index].concat(item)

const createNodesFromItems = (
  createNodeId,
  createContentDigest,
  createNode,
  items
) =>
  items.forEach(item => {
    const nodeContent = tail(item)
    return createNode({
      id: createNodeId(`csv-item-${head(item)}`),
      parent: null,
      children: [],
      internal: {
        type: 'CSVItem',
        content: JSON.stringify(nodeContent),
        contentDigest: createContentDigest(nodeContent),
      },
      data: nodeContent,
    })
  })

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) =>
  fetch(configOptions.url)
    .then(response => response.text())
    .then(rawCsv =>
      parse(rawCsv, (err, output) =>
        createNodesFromItems(
          createNodeId,
          createContentDigest,
          actions.createNode,
          tail(output).map(withIndex)
        )
      )
    )
