import { h } from 'hyperapp'

import RateUp from './RateUp.jsx'
import RateDown from './RateDown.jsx'

const locatePrice = ({locate, price}) => price ?
                              locate + Number(price).toLocaleString() : '0'

export default ({coinName, locate, price, rate}) => (state, action) => {
  const isUp = Number(rate || 0) > 0
  const RateLabel = isUp ? RateUp : RateDown

  return (
    <div class="siimple-card" style="max-width:300px;">
        <div class="siimple-card-body">
            <div class="siimple-card-title">{coinName}</div>
            <div class="siimple-card-subtitle">{locatePrice({locate, price})}</div>
            <RateLabel rate={rate} />
        </div>
    </div>
  )
}
