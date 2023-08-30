/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'
import {Component} from 'react'

import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, activeTabIdList: [], temp: 0}

  lastFunc = () => {
    this.setState({temp: 1})
  }

  clickTabItem = id => {
    const {activeTabIdList, score, topScore} = this.state

    const {emojisList} = this.props
    const checkExistence = activeTabIdList.includes(id)
    if (score === emojisList.length - 1) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        topScore: prevState.score + 1,
        temp: 1,
      }))
    } else if (checkExistence) {
      // console.log("failed")

      if (score >= topScore) {
        // console.log('if block')
        this.setState(prevState => ({
          activeTabIdList,
          topScore: score,
          temp: 2,
        }))
      } else if (score < topScore) {
        // console.log(' else block')
        this.setState(prevState => ({
          activeTabIdList,
          topScore,
          temp: 2,
        }))
      }
    } else {
      console.log(score)
      activeTabIdList.push(id)

      this.setState(prevState => ({
        activeTabIdList,
        score: prevState.score + 1,
      }))

      this.getShuffledEmojisList()
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgainList = () => {
    const {score, topScore} = this.state
    if (score >= topScore) {
      this.setState({
        score: 0,
        activeTabIdList: [],
        temp: 0,
        topScore: score,
      })
    } else {
      this.setState({
        score: 0,
        activeTabIdList: [],
        temp: 0,
        topScore,
      })
    }
  }

  render() {
    const {score, topScore, temp} = this.state
    const randomList = this.getShuffledEmojisList()
    const {emojisList} = this.props
    // console.log(randomList)

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} temp={temp} />
        {temp === 1 && (
          <WinOrLoseCard
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            score={score}
            playAgainList={this.playAgainList}
            emojisLength={emojisList.length}
          />
        )}
        {temp === 2 && (
          <WinOrLoseCard
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            score={score}
            playAgainList={this.playAgainList}
            emojisLength={emojisList.length}
          />
        )}

        {temp === 0 && (
          <ul className="emoji-cards-container">
            {randomList.map(eachList => (
              <EmojiCard
                eachList={eachList}
                key={eachList.id}
                clickTabItem={this.clickTabItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default EmojiGame
