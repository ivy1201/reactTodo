import TodoHeader from '../containers/TodoHeader'
import TodoContents from '../containers/TodoContents'
import SearchBox from '../containers/SearchBox'
import TodoFooter from './TodoFooter'


const App = () => (
	<div className="container">
		<TodoHeader />
		<SearchBox />
		<TodoContents />
		<TodoFooter />
	</div>
)

export default App


