import {h} from 'hyperapp'

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
      oninput={oninput}
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
