import { SELECT_POKEMON } from "../actions"

const initialState = {
  sItem: 1
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_POKEMON:
      return {
        number: state.number + 1
      }
    default:
      return state
  }
}

export default reducer
