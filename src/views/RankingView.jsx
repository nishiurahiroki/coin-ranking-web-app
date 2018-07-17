import {h} from 'hyperapp'

import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

import CoinInfomation from '../components/CoinInfomation.jsx'

import NowLoading from '../components/Loading.jsx'

import RefreshButton from '../components/RefreshButton.jsx'
import SortButton from '../components/SortButton.jsx'
import SuggestText from '../components/SuggestText.jsx'

import {BUTTON_BETWEEN_MARGIN} from '../const.js'

import DetailView from '../views/DetailView.jsx'

export default ({coinInfos, locate = 'JPY'}) => (state, action) => {
  const initialize = () => {
    action.clearHeaderIconButtons()
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
    action.addHeaderIconButton(
      <SuggestText
        style={{marginLeft : BUTTON_BETWEEN_MARGIN}}
        oninput={async ({target, keyCode}) => {
          const searchText = target.value
          if(!searchText) {
            action.setSuggestWords([])
            return
          }

          const allCoins = await CoinInfomationRepository.getAllCoins()
          const suggestWords = allCoins.filter(({name}) => name.toLowerCase().startsWith(searchText.toLowerCase()))
          action.setSuggestWords(suggestWords)
        }}
        onSelectValue={async coinId => {
          const coinInfo = await CoinInfomationRepository.findCoinInfo({coinId})
          action.refreshCoinRanking({coinInfos : [coinInfo]})
        }}
      />
    )
  }

  const showDetail = async coinId => {
    action.changeCurrentView(<NowLoading />)
    const coin = await CoinInfomationRepository.findCoinInfo({coinId})
    action.changeCurrentView(
      <DetailView
        name={coin.name} totalSupply={coin.total_supply}
        maxSupply={coin.max_supply} price={coin.quotes[locate].price}
        rate1h={coin.quotes[locate].percent_change_1h}
        rate24h={coin.quotes[locate].percent_change_24h}
        rate7d={coin.quotes[locate].percent_change_7d}
      />
    )
  }

  return (
    <div key="rankingView" oncreate={initialize}>
      {coinInfos
        .map(({name, quotes, id}) => (
          <CoinInfomation
            coinName={name}
            price={quotes[locate].price}
            symbol="￥"
            rate={quotes[locate].percent_change_1h}
            onclick={() => showDetail(id)}
          />
        ))
      }
    </div>
  )
}
