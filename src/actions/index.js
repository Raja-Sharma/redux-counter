export function increment(count) {
  return{
    type: 'INCREMENT',
    payload: count
  }
}

export function decrement(count) {
  return{
    type: 'DECREMENT',
    payload: count
  }
}
