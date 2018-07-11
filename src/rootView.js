import {h} from 'hyperapp'

import Header from './components/Header.jsx'

import RefreshButton from './components/RefreshButton.jsx'
import SortButton from './components/SortButton.jsx'

import CoinInfomationRepository from './repository/CoinInfomationRepository.js'

import {BUTTON_BETWEEN_MARGIN} from './const.js'

export default () => (state, action) => (
 <div>
   <Header title={state.pageTitle}>
    <RefreshButton onclick={() => {
      const coinInfos = CoinInfomationRepository.getCoinInfos({orderBy : state.orderBy})
      action.refreshCoinRanking({coinInfos})
    }}/>
    <SortButton style={{marginLeft : BUTTON_BETWEEN_MARGIN}} onclick={() => {
      const {orderBy} = action.toggleOrderBy()
      const coinInfos = CoinInfomationRepository.getCoinInfos({orderBy})
      action.refreshCoinRanking({coinInfos})
    }}/>
   </Header>
   <state.currentPage/>
 </div>
)
