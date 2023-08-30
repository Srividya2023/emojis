// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachList, clickTabItem} = props
  const {id, emojiName, emojiUrl} = eachList
  const onClickEmoji = () => {
    clickTabItem(id)
  }
  return (
    <li className="individual-card-container">
      <button onClick={onClickEmoji} className="emoji-btn" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
