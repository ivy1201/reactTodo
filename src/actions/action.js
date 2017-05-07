import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SERACH_TODO, SET_VISIBILITY_FILTER} from './actionType'

let todoId = 0;

export const addTodo = (text) => ({
	type: ADD_TODO,
	id: todoId++,
	text
});

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id
});

export const setVisibilityFilter = (filter) => ({
	type: SET_VISIBILITY_FILTER,
	filter
});

export const searchTodo = (searchText) => ({
	type: SERACH_TODO,
	searchText
})

