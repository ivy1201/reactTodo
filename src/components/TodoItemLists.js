import React, {PropTypes} from 'react'
import TodoItem from './TodoItem'

const TodoItemLists = ({todos, onTodoToggle, onTodoRemove}) => {
	if(todos.length===0) {
		return (
			<ul className = "mainContent">
				<li><label> No Items need to do!</label></li>
			</ul>
		)
	}
	
	return (
		<ul className = "mainContent">
			{todos.map(todoItem => 
				<TodoItem key={todoItem.id} {...todoItem} onChange={() => onTodoToggle(todoItem.id)} onClick={() => onTodoRemove(todoItem.id)}/>
			)}
		</ul>
	)
}


export default TodoItemLists