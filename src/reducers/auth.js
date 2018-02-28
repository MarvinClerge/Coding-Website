const initalState = {
  loggedIn: false,
  token: null,
  currentUser: null,
  codes: null
}

export default (state = initalState, action) => {
  switch (action.type) {

    case "LOGIN":
      if (action.payload.error) {
        return state
      } else {
        return Object.assign({}, state, {
          loggedIn: true,
          token: action.payload.token,
          currentUser: action.payload.user,
          codes: action.payload.codes
        })
      }

    case "SIGNUP":
      if (action.payload.error) {
        return state
      } else {
        localStorage.setItem('token', action.payload.token)
        return Object.assign({}, state, {
          loggedIn: true,
          token: action.payload.token,
          currentUser: action.payload.user
        })
      }

    case "SET_USER":
      return Object.assign({}, state, {
        loggedIn: true,
        token: action.payload.token,
        currentUser: action.payload.user
      })

    case "SAVE_CODE":
    // This reducer is also called in "code" to manage the editor input and code id

    if (action.payload.type === "create") {
      return Object.assign({}, state, {
        codes: [ action.payload.code, ...state.codes]
      })

    } else {
      let index = (state.codes.findIndex(code => {
        return code.id === action.payload.code.id
      }));

      let newCodes = state.codes.slice()
      newCodes[index].content = (action.payload.code.content ? action.payload.code.content : "...")

      return Object.assign({}, state, {
        codes: newCodes
      })
    }

    case "DELETE_CODE":
      let index = state.codes.findIndex(code => {
        return code.id === action.payload.code_id
      })

      let newCodes = state.codes.slice()
      newCodes.splice(index, 1)

      return Object.assign({}, state, {
        codes: newCodes
      })

    default:
      return state
  }
}
