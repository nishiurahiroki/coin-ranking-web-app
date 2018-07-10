import {h} from 'hyperapp'

import NowLoading from '../components/Loading.jsx'

export default ({coinInfos}) => async (state, action) => {
  action.showCoinRanking({coinRanking : <NowLoading />})
  action.showCoinRanking({coinRanking : await action.getCoinRanking({coinInfos})})
}
