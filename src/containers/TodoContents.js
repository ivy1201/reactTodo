import { connect } from 'react-redux'
import { toggleTodo, removeTodo, searchTodo} from '../actions/action'
import {VISIBILITY_FILTER} from '../actions/actionType'
import TodoItemLists from '../components/TodoItemLists'

const getVisibleTodos = (todos, filter, searchText) => {
  if(!searchText) {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_ALL:
        return todos
      case VISIBILITY_FILTER.SHOW_COMPLETE:
        return todos.filter(todo => todo.completed)
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
  return todos.filter(todo => {
    return todo.text.indexOf(searchText) !== -1 ? todo : false;
  });
  
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.searchTodo)
})

const mapDispatchToProps = {
  onTodoToggle: toggleTodo,
  onTodoRemove: removeTodo
}

const TodoContents = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemLists)

export default TodoContents
