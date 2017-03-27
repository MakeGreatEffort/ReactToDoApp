import { ADD_TODO, REMOVE_TODO } from '../constants/ActionTypes'

export function add (item) {
  return {
    type: ADD_TODO,
    payload: item
  }
}

export function remove (index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}
