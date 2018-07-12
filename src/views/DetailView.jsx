import {h} from 'hyperapp'

export default props => ({coinDetail}, action) => {
  return (
    <div class="siimple-form">
      <div class="siimple-field">
        <div class="siimple-field-label">名称</div>
        {props.name}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">値段</div>
        ￥{props.price}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">レート(1時間内)</div>
        {props.rate1h}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">レート(24時間内)</div>
        {props.rate24h}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">レート(1週間内)</div>
        {props.rate7d}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">現在総発行枚数</div>
        {props.totalSupply}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">発行枚数上限</div>
        {props.maxSupply}
      </div>
    </div>
  )
}
