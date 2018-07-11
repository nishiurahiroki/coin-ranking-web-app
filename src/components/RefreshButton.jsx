import {h} from 'hyperapp'

export default ({onclick, style}, children) => () => (
  <i class="fa fa-refresh" onclick={onclick} style={style}></i>
)
