import {h} from 'hyperapp'

const SORT = {
  desc : 'down',
  asc : 'up'
}

export default props => ({order = 'down'}, action) => (
  <i class={`fa fa-arrow-${SORT[order]}`} style={props.style} onclick={props.onclick}></i>
)
