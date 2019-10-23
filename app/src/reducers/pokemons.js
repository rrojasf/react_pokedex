const pokemons = (state = [], action) => {
  switch (action.type) {
    case "SELECT_POKEMON":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default pokemons
