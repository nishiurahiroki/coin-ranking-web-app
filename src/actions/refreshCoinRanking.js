import {h} from 'hyperapp'

import CoinInfomation from '../components/CoinInfomation.jsx'

import NowLoading from '../components/Loading.jsx'

export default ({coinInfos, locate = 'JPY'}) => async (state, action) => {
  const coinRanking = coinInfos.then(infos =>
                        infos.map(info => (
                          <CoinInfomation
                            coinName={info.name}
                            price={info.quotes[locate].price}
                            symbol="￥"
                            rate={info.quotes[locate].percent_change_1h}
                          />
                      )))

  action.showCoinRanking({coinRanking : <NowLoading />})
  action.showCoinRanking({coinRanking : await coinRanking})
}
