import {h} from 'hyperapp'

import Header from './components/Header.jsx'

 export default (state, action) => (
   <div>
     <Header title={state.pageTitle} />
     <state.currentPage state={state} action={action} />
   </div>
 )
