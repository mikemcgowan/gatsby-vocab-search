export const head = xs => xs[0]
export const tail = xs => xs.slice(1)

export const any = (predicate, collection) => {
  if (!collection || collection.length === 0) {
    return false
  }
  if (predicate(head(collection))) {
    return true
  }
  return any(predicate, tail(collection))
}
