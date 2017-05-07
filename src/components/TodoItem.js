import React, {PropTypes} from 'react'

const TodoItem = ({onClick, onChange, completed, text}) => {
	return (
		<li>
			<label>
				<input type="checkbox" checked={completed} onChange={onChange}/>
				<span> {text} </span>
			</label>
			<button onClick={onClick}> Delete </button>
		</li>
	)
	
}

TodoItem.PropTypes = {
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default TodoItem