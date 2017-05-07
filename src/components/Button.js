import { PropTypes } from 'react'

const Button = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button type="button" 
      onClick={e => {
         e.preventDefault()
         onClick()
      }}> 
      {children} 
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
