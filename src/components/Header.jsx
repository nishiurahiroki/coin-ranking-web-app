import {h} from 'hyperapp'

const style = {
  position: 'sticky',
  top : 0
}

export default (props, children) => (state, action) => (
  <div class="siimple-box siimple-box--primary" style={style}>
    <div class="siimple-box-title">{props.title}</div>
    <div class="siimple-box-subtitle">{children}</div>
  </div>
)
