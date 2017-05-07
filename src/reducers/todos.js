import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SEARCH_TODO} from '../actions/actionType'

const todos = (state = [], action) => {
	switch(action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case REMOVE_TODO:
			return state.filter(todo => {
				let tid = todo.id,
					aid = action.id,
					newTodo = {};
				return tid !== aid ? true : false;
			})
		case TOGGLE_TODO:
			return state.map(todo => {
				if(todo.id !== action.id) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed
				}
			})
		default:
			return state;

	}
}

export default todos