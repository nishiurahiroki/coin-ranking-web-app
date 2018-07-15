import {h} from 'hyperapp'

export default ({onclick, style}) => () => (
  <i class="fa fa-arrow-left" style={style} onclick={onclick}></i>
)
