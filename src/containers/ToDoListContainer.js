import { connect } from 'react-redux'
import { remove } from '../actions/ActionToDo'
import List from '../components/List'

function mapStateToProps (state) {
  return {
    todos: state.todoState.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeToDo: (index) => {
      dispatch(remove(index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
