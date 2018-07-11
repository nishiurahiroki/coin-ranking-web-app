import {h} from 'hyperapp'

const SORT = {
  desc : 'down',
  asc : 'up'
}

export default ({style, onclick}) => ({orderBy = 'down'}) => (
  <i class={`fa fa-arrow-${SORT[orderBy]}`} style={style} onclick={onclick}></i>
)
