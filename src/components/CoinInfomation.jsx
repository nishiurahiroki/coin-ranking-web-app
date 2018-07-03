import { h } from 'hyperapp'

export default props => (
  <div class="siimple-card" style="max-width:300px;">
      <div class="siimple-card-body">
          <div class="siimple-card-title">{props.coinName}</div>
          <div class="siimple-card-subtitle">{props.locate || ''}{props.price}</div>
          {props.rate}
      </div>
  </div>
)
