import { connect } from 'react-redux'
import { add } from '../actions/ActionToDo'
import Input from '../components/Input'

function mapStateToProps (state) {
  return {
    todos: state.todoState.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToDo: (text) => {
      dispatch(add(text))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)
