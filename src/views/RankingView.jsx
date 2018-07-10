import {h} from 'hyperapp'

import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

export default () => (state, action) => {
  const coinInfos = CoinInfomationRepository.getCoinInfos({locate : 'JPY'})
  return (
    <div oncreate={() => action.refreshCoinRanking({coinInfos})}>
      {state.coinRanking}
    </div>
  )
}
