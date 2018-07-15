import {h} from 'hyperapp'

import BackButton from '../components/BackButton.jsx'

import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

import NowLoading from '../components/Loading.jsx'

import RankingView from './RankingView.jsx'

export default props => ({coinDetail}, action) => {
  const initialize = () => {
    action.clearHeaderIconButtons()
    action.addHeaderIconButton(
      <BackButton onclick={async () => {
        action.changeCurrentView(<NowLoading />)
        const coinInfos = await CoinInfomationRepository.getCoinInfos({
          locate : 'JPY',
          orderBy : action.getNowOrderBy()
        })
        action.changeCurrentView(<RankingView coinInfos={coinInfos}/>)
      }}/>
    )
  }


  return (
    <span oncreate={initialize} class="siimple-form">
      <div class="siimple-field">
        <div class="siimple-field-label">名称</div>
        {props.name}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">値段</div>
        ￥{props.price}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">レート(1時間内)</div>
        {props.rate1h}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">レート(24時間内)</div>
        {props.rate24h}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">レート(1週間内)</div>
        {props.rate7d}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">現在総発行枚数</div>
        {props.totalSupply}
      </div>
      <div class="siimple-field">
        <div class="siimple-field-label">発行枚数上限</div>
        {props.maxSupply}
      </div>
    </span>
  )
}
