import { h } from 'hyperapp'

import RateUp from './RateUp.jsx'
import RateDown from './RateDown.jsx'

const locatePrice = ({symbol, price}) => price ?
                              symbol + Number(price).toLocaleString() : `${symbol}0`

export default ({coinName, symbol, price, rate, onclick}) => (state, action) => {
  const RateLabel = Number(rate || 0) > 0
                      ? RateUp : RateDown

  return (
    <div class="siimple-card" style="max-width:300px;" onclick={onclick}>
        <div class="siimple-card-body">
            <div class="siimple-card-title">{coinName}</div>
            <div class="siimple-card-subtitle">{locatePrice({symbol, price})}</div>
            <RateLabel rate={rate} />
        </div>
    </div>
  )
}
