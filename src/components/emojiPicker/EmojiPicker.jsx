import { forwardRef, useState } from "react"
import { data as emojilist} from './data'
import EmojiSearch from './EmojiSearch'
// export default forwardRef((props, inputRef) => {

// })

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false) 
  const [emojis, setEmojis] = useState(emojilist)

  function handleClickOpen() {
    setIsOpen(!isOpen)
  }

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();

    if(!!q) {
      const search = emojilist.filter(emoji => emoji.name.toLowerCase().includes(q) || emoji.keywords.toLowerCase().includes(q))
      setEmojis(search)
    } else {
      setEmojis(emojilist)
    }


  }

  function EmojiPickerContainer () {
    return (
      <div>
        <EmojiSearch onSearch={handleSearch}/>
        <div>
          {emojilist.map(emoji => (
          <div key={emoji.symbol}>{emoji.symbol}</div>))}
        </div>
      </div>
    )
  }


  return <div>
    <button onClick={handleClickOpen}>😊</button>
    {isOpen ? <EmojiPickerContainer/> : ""}
  </div>
}

export default forwardRef(EmojiPicker);