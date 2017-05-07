import {SET_VISIBILITY_FILTER, VISIBILITY_FILTER} from '../actions/actionType'

const visibilityFilter = (state = VISIBILITY_FILTER.SHOW_ALL, action) => {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

export default visibilityFilter