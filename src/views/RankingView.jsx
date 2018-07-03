import {h} from 'hyperapp'

import CoinInfomation from '../components/CoinInfomation.jsx'
import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

export default ({state, action}) => {
  const fetchCoinInfo = CoinInfomationRepository.getCoinInfos({
    locate : 'JPY'
  })

  const coinInfos = fetchCoinInfo.then(infos => infos.map(info => (
    <CoinInfomation
      coinName={info.name}
      price={info.quotes.JPY.price}
      locate="￥"
      rate={info.quotes.JPY.percent_change_1h}
    />
  )))

  return (
    <div oncreate={async () => action.refreshCoinRanking({coinInfos : await coinInfos})}>
      {state.coinInfos}
    </div>
  )
}
