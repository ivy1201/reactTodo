import React from 'react'
import {addTodo} from '../actions/action'
import {connect} from 'react-redux'


let TodoHeader = ({dispatch}) => {
	let input;
	
	return (
		<div className="todoHeader">
			<form onSubmit={(e) => {
				e.preventDefault();
				let value = input.value;
				if(!value) {
					return false;
				}
				dispatch(addTodo(value));
				input.value='';
			}}>
				<input ref={node => {input = node}} type='text' placeholder='Please input the your tasks and press Enter to finish!'/>
			</form>
			
		</div>
	)
}

TodoHeader = connect()(TodoHeader)

export default TodoHeader

