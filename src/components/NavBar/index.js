// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, temp} = props
  const visibilityContainer0 = () => {
    if (temp === 1 || temp === 2) {
      console.log('in-visible')
      return 'scores-container-in-visible'
    }
    console.log('visible')
    return 'scores-container-visible'
  }
  const visibilityContainer1 = () => {
    if (temp === 1 || temp === 2) {
      console.log('in-visible')
      return 'score-props-in-visible'
    }
    console.log('visible')
    return 'score-props-visible'
  }
  const visibilityContainer2 = () => {
    if (temp === 1 || temp === 2) {
      console.log('in-visible')
      return 'top-score-props-in-visible'
    }
    console.log('visible')
    return 'top-score-props-visible'
  }
  return (
    <div className="nav-container">
      <div className="emoji-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-props">Emoji Game</h1>
      </div>

      <div className={visibilityContainer0()}>
        <p className={visibilityContainer1()}>Score: {score}</p>
        <p className={visibilityContainer2()}>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
