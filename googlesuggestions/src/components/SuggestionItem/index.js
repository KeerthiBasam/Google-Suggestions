// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, clickArrow} = props
  const {suggestion} = suggestions

  const onClickArrowIcon = () => {
    clickArrow(suggestion)
  }

  return (
    <li className="item">
      <p className="text">{suggestion}</p>
      <button type="button" className="btn" onClick={onClickArrowIcon}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
