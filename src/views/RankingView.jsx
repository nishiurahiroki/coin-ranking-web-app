import {h} from 'hyperapp'

import CoinInfomation from '../components/CoinInfomation.jsx'
import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

import NowLoading from '../components/Loading.jsx'

const SORT_DESC = (a, b) => b.quotes.JPY.price - a.quotes.JPY.price

export default () => (state, action) => {
  const fetchCoinInfo = CoinInfomationRepository.getCoinInfos({
    locate : 'JPY'
  })

  const coinInfos = fetchCoinInfo.then(infos =>
    infos
      .sort(SORT_DESC)
      .map(info => (
        <CoinInfomation
          coinName={info.name}
          price={info.quotes.JPY.price}
          locate="￥"
          rate={info.quotes.JPY.percent_change_1h}
        />
      )))

  const showRanking = async () => {
    action.refreshCoinRanking({coinInfos : <NowLoading />})
    action.refreshCoinRanking({coinInfos : await coinInfos})
  }

  return (
    <div oncreate={showRanking}>
      {state.coinInfos}
    </div>
  )
}
