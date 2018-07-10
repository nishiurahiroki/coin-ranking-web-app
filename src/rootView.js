import {h} from 'hyperapp'

import Header from './components/Header.jsx'

import RefreshButton from './components/RefreshButton.jsx'
import SortButton from './components/SortButton.jsx'

import CoinInfomationRepository from './repository/CoinInfomationRepository.js'

const BUTTON_BETWEEN_MARGIN = '3.2vw'

export default () => (state, action) => (
 <div>
   <Header title={state.pageTitle} >
    <RefreshButton onclick={() => {
      const coinInfos = CoinInfomationRepository.getCoinInfos({order : state.order})
      action.refreshCoinRanking({coinInfos})
    }}/>
    <SortButton style={{marginLeft : BUTTON_BETWEEN_MARGIN}} onclick={() => {
      const {order} = action.toggleOrder()
      const coinInfos = CoinInfomationRepository.getCoinInfos({order})
      action.refreshCoinRanking({coinInfos})
    }}/>
   </Header>
   <state.currentPage/>
 </div>
)
