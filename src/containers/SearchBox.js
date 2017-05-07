import React from 'react'
import {searchTodo} from '../actions/action'
import {connect} from 'react-redux'

let SearchBox = ({dispatch}) => {
	let input;
	return (
		<div className = "searchBox">
			<form onSubmit={(e) => {
				e.preventDefault();
				let value = input.value;
				if(!value) {
					return false;
				}
				dispatch(searchTodo(value));
				input.value='';
			}}>
			<input type="text" ref={node => {input = node}}  placeholder="Enter keywords to search and press Enter to finish!"/>
			</form>
		</div>
	)

}



SearchBox = connect()(SearchBox)

export default SearchBox

