import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/action'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default FilterButton
