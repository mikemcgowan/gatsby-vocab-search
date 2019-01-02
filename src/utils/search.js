import { any } from './misc'

export default (term, nodes) => {
  if (typeof term !== 'string' || term.length < 3) {
    return []
  }
  return nodes.filter(node =>
    any(s => s.toLowerCase().includes(term.toLowerCase()), node.data)
  )
}
