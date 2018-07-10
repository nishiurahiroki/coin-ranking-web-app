export default () => (state, action) => {
  const NEXT_ORDER = {
    desc : 'asc',
    asc : 'desc'
  }

  return {order : NEXT_ORDER[state.order]}
}
