import {h} from 'hyperapp'

import CoinInfomation from '../components/CoinInfomation.jsx'

export default ({coinInfos, locate = 'JPY'}) => async (state, action) => {
  const coinRanking = await coinInfos.then(infos =>
    infos
      .map(info => (
        <CoinInfomation
          coinName={info.name}
          price={info.quotes[locate].price}
          symbol="￥"
          rate={info.quotes[locate].percent_change_1h}
        />
      )))
  return coinRanking
}
