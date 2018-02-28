import codeAdapter from '../adapter/code_adapter'

const initalState = {
  input: '',
  output: '',
  id: null
}

export default function manageApp(state = initalState, action) => {
  switch (action.type) {
    case "INPUT":
      return Object.assign({}, state, {
        input: action.value
      })

    case "OUTPUT":
      return Object.assign({}, state, {
        output: action.value
      })

    case "SAVE_CODE":
    // this reducer is also called in "auth" to manage the array of codes

      return Object.assign({}, state, {
        id: action.payload.code.id
      })
      return state

    case "LOAD":
      return Object.assign({}, state, {
        input: action.payload.content,
        id: action.payload.id
      })
      return state

    case "DELETE_CODE":
      if (action.payload.message) {
        return Object.assign({}, state, {
          id: null
        })
      } else {
        return state
      }

    default:
      return state
  }
}
