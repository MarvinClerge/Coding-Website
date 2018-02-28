const initalState = {
  status: 'code',
  auth: {
    token: null,
    loggedIn: false,
    currentUser: null
  },
  code: {
    codes: [],
    input: '',
    output: '',
    currentId: null
  },
  challenge: {
    challenges: [],
    currentId: null
  }
}

export default function rootReducer(state = initalState, action){
  let index, newCodes;


  switch (action.type) {
    // AUTH
    case "LOGIN":
      return Object.assign({}, state, {
        auth: {
          loggedIn: true,
          token: action.payload.token,
          currentUser: action.payload.user
        },
        code: {
          codes: action.payload.codes
        },
        challenge: {
          challenges: action.payload.challenges
        }
      });

    case "SET_CHALLENGES":
      return Object.assign({}, state, {
        challenge: {
          challenges: action.payload.challenges
        }
      });


    case "CHANGE_CODE_VALUE":
      return Object.assign({}, state, {
        code: {
          ...state.code,
          [action.payload.type]: action.payload.value
        }
      });

    case "INPUT":
      return Object.assign({}, state, {
        code: {
          ...state.code,
          input: action.value
        }
      })

    case "OUTPUT":
      return Object.assign({}, state, {
        code: {
          ...state.code,
          output: action.value
        }
      })

    case "CREATE_CODE":
      return Object.assign({}, state, {
        code: {
          ...state.code,
          codes: [action.payload.code, ...state.code.codes],
          currentId: action.payload.code.id
        }
      });

    case "SAVE_CODE":
      index = (state.code.codes.findIndex(code => {
        return code.id === action.payload.code.id
      }));

      newCodes = state.code.codes.slice()
      newCodes.splice(index, 1)
      newCodes.unshift(action.payload.code)

      let content = action.payload.code.content ? action.payload.code.content : "// empty"
      newCodes[0].content = content

      return Object.assign({}, state, {
        code: {
          ...state.code,
          codes: newCodes
        }
      });

    case "LOAD":
      return Object.assign({}, state, {
        code: {
          ...state.code,
          input: action.payload.content,
          currentId: action.payload.id
        }
      })
      return state

    case "DELETE_CODE":
      index = state.code.codes.findIndex(code => {
        return code.id === action.payload.code_id
      });

      newCodes = state.code.codes.slice()
      newCodes.splice(index, 1)

      return Object.assign({}, state, {
        code: {
          ...state.code,
          codes: newCodes
        }
      });


    default:
      return state;
  }
}
