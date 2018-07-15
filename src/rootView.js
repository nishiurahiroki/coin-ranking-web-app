import {h} from 'hyperapp'

import Header from './components/Header.jsx'

import NowLoading from './components/Loading.jsx'

import CoinInfomationRepository from './repository/CoinInfomationRepository.js'

import DEFALUT_VIEW from './views/RankingView.jsx'
const DEFAULT_VIEW_TITLE = '仮想通貨 PRICE RANKING'

export default () => ({viewTitle, headerIconButtons, currentView, orderBy}, action) => {
  const initialize = async () => {
    action.changeViewTitle({viewTitle : DEFAULT_VIEW_TITLE})
    action.changeCurrentView(<NowLoading/>)
    const coinInfos = CoinInfomationRepository.getCoinInfos({locate : 'JPY'})
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
