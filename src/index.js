import {h, app} from 'hyperapp'

import CoinInfomation from './components/CoinInfomation.jsx'

import rootView from './rootView.js'
import rootAction from './rootAction.js'
import rootState from './rootState.js'


import DEFALUT_VIEW from './views/RankingView.jsx'
const DEFAULT_PAGE_TITLE = '仮想通貨 PRICE RANKING'

rootState.currentPage = DEFALUT_VIEW
rootState.pageTitle = DEFAULT_PAGE_TITLE

app(rootState, rootAction, rootView, document.getElementById('app'))
