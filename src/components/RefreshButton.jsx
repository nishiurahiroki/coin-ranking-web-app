import {h} from 'hyperapp'

export default (props, children) => (state, action) => (
  <i class="fa fa-refresh" onclick={props.onclick} style={props.style}></i>
)
