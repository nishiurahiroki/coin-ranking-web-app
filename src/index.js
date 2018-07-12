import {h, app} from 'hyperapp'

import rootView from './rootView.js'
import rootAction from './rootAction.js'
import rootState from './rootState.js'

app(rootState, rootAction, rootView, document.getElementById('app'))
