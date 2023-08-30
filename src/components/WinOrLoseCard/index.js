// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {src, score, playAgainList, emojisLength} = props

  const onClickPlayBtn = () => {
    playAgainList()
    console.log(emojisLength)
  }
  return (
    <div className="win-lose-container">
      <div className="min-width-flex-props">
        <div className="order-props">
          <img src={src} className="win-lose-img" alt="win or lose" />
        </div>
        <div>
          {src ===
            'https://assets.ccbp.in/frontend/react-js/won-game-img.png' && (
            <div>
              <h1 className="win-lose-msg">You Won</h1>
              <div className="score-max-center">
                <p className="score-msg">Best Score</p>
                <p className="score-dashboard">
                  {score}/{emojisLength}
                </p>
              </div>
            </div>
          )}
          {src !==
            'https://assets.ccbp.in/frontend/react-js/won-game-img.png' && (
            <div>
              <h1 className="win-lose-msg">You Lose</h1>
              <div className="score-max-center">
                <p className="score-msg">Score</p>
                <p className="score-dashboard">
                  {score}/{emojisLength}
                </p>
              </div>
            </div>
          )}
          <button onClick={onClickPlayBtn} className="play-btn" type="button">
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
