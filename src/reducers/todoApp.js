import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import searchTodo from './searchTodo'

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	searchTodo
})

export default todoApp