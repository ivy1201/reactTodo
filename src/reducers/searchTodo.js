import {SERACH_TODO} from '../actions/actionType'

const searchTodo = (state = '', action) => {
	switch(action.type) {
		case SERACH_TODO:
			return action.searchText;
		default:
			return '';
	}
}

export default searchTodo;