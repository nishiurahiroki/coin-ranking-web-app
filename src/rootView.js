import {h} from 'hyperapp'

import Header from './components/Header.jsx'

import RefreshButton from './components/RefreshButton.jsx'
import SortButton from './components/SortButton.jsx'

import NowLoading from './components/Loading.jsx'

import CoinInfomationRepository from './repository/CoinInfomationRepository.js'

import DEFALUT_VIEW from './views/RankingView.jsx'
const DEFAULT_VIEW_TITLE = '仮想通貨 PRICE RANKING'

import {BUTTON_BETWEEN_MARGIN} from './const.js'

export default () => ({viewTitle, headerIconButtons, currentView, orderBy}, action) => {
  const initialize = async () => {
    action.changeViewTitle({viewTitle : DEFAULT_VIEW_TITLE})

    const coinInfos = CoinInfomationRepository.getCoinInfos({locate : 'JPY'})
    action.addHeaderIconButton(
      <RefreshButton onclick={() => {
        const nowOrderBy = action.getNowOrderBy()
        const coinInfos = CoinInfomationRepository.getCoinInfos({orderBy : nowOrderBy})
        action.refreshCoinRanking({coinInfos})
      }}/>
    )
    action.addHeaderIconButton(
      <SortButton style={{marginLeft : BUTTON_BETWEEN_MARGIN}} onclick={() => {
        const {orderBy} = action.toggleOrderBy()
        const coinInfos = CoinInfomationRepository.getCoinInfos({orderBy})
        action.refreshCoinRanking({coinInfos})
      }}/>
    )

    action.changeCurrentView(<NowLoading/>)
    const defaltViewProps = {coinInfos : await coinInfos}
    action.changeCurrentView(<DEFALUT_VIEW {...defaltViewProps}/>)
  }

  return (
   <div oncreate={initialize}>
     <Header title={viewTitle}>
      {headerIconButtons}
     </Header>
     {currentView}
   </div>
  )
}
