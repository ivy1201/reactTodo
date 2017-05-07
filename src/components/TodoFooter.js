import {VISIBILITY_FILTER} from '../actions/actionType'
import FilterButton from '../containers/FilterButton'

const TodoFooter = () => (
  <div className="todoFooter">
    <FilterButton filter={VISIBILITY_FILTER.SHOW_ALL}>
      All
    </FilterButton>
    <FilterButton filter={VISIBILITY_FILTER.SHOW_ACTIVE}>
      Active
    </FilterButton>
    <FilterButton filter={VISIBILITY_FILTER.SHOW_COMPLETE}>
      Completed
    </FilterButton>
  </div>
)

export default TodoFooter
