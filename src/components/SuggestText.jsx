import {h} from 'hyperapp'

import CoinInfomationRepository from '../repository/CoinInfomationRepository.js'

const inputStyle = {
  fontFamily: 'FontAwesome',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textDecoration: 'inherit'
}

const UNIQUE_ID = Math.random().toString(36).slice(-8)

export default ({style, oninput, onSelectValue}) => ({suggestWords}, action) => (
  <span style={style}>
    <input
      oninput={async ({target}) => {
        const searchText = target.value
        if(!searchText) {
          action.setSuggestWords([])
          return
        }

        const allCoins = await CoinInfomationRepository.getAllCoins()
        const suggestWords = allCoins.filter(({name}) => name.toLowerCase().startsWith(searchText.toLowerCase()))
        action.setSuggestWords(suggestWords)
      }}
      onchange={e => {
        const target = Array.prototype.find.call(e.target.list.options, ({value}) => value == e.target.value)
        onSelectValue(target.dataset.id)
      }}
      autocomplete="on"
      list={UNIQUE_ID}
      style={inputStyle}
      placeholder="&#xF002;"
      type="text"
      class="siimple-input"
    />
    <datalist id={UNIQUE_ID}>
      {suggestWords.map(({name, id}) => (
        <option value={name} data-id={id}/>
      ))}
    </datalist>
  </span>
)
