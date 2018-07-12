import {h} from 'hyperapp'

import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

import CoinInfomation from '../components/CoinInfomation.jsx'

import NowLoading from '../components/Loading.jsx'

import DetailView from '../views/DetailView.jsx'

export default ({coinInfos, locate = 'JPY'}) => (state, {changeCurrentView}) => (
  <div>
    {coinInfos
      .map(({name, quotes, id}) => (
        <CoinInfomation
          coinName={name}
          price={quotes[locate].price}
          symbol="￥"
          rate={quotes[locate].percent_change_1h}
          onclick={async () => {
            changeCurrentView(<NowLoading />)
            const coin = await CoinInfomationRepository.findCoinInfo({coinId : id})
            changeCurrentView(
              <DetailView
                name={coin.name} totalSupply={coin.total_supply}
                maxSupply={coin.max_supply} price={coin.quotes[locate].price}
                rate1h={coin.quotes[locate].percent_change_1h}
                rate24h={coin.quotes[locate].percent_change_24h}
                rate7d={coin.quotes[locate].percent_change_7d}
              />
            )
          }}
        />
      ))
    }
  </div>
)
