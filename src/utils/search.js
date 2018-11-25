import { any } from './utils'

export default (term, nodes) => {
  if (typeof term !== 'string' || term.length < 2) {
    return []
  }
  return nodes.filter(node =>
    any(node.data, s => s.toLowerCase().includes(term.toLowerCase()))
  )
}
