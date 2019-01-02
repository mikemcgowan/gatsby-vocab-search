const fetch = require('node-fetch')
const parse = require('csv-parse/lib/sync')
const path = require('path')

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
    .then(rawCsv => {
      const output = parse(rawCsv)
      createNodesFromItems(
        createNodeId,
        createContentDigest,
        actions.createNode,
        tail(output).map(withIndex)
      )
    })

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'CSVItem') {
    createNodeField({
      node,
      name: 'slug',
      value: node.id,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allCsvItem {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allCsvItem.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/csv-item.js'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
