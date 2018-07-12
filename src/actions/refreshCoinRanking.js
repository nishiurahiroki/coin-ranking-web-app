import {h} from 'hyperapp'

import RankingView from '../views/RankingView.jsx'

import NowLoading from '../components/Loading.jsx'

export default ({coinInfos, locate = 'JPY'}) => async (state, action) => {
  action.changeCurrentView(<NowLoading/>)
  action.changeCurrentView(<RankingView coinInfos={await coinInfos}/>)
}
