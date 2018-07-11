export default () => ({orderBy}, action) => {
  const NEXT_ORDER_BY = {
    desc : 'asc',
    asc : 'desc'
  }

  return {orderBy : NEXT_ORDER_BY[orderBy]}
}
