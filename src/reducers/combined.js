const initalState = {
  status: 'code',
  sideActive: true,
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
    current: null
  }
}

export default function rootReducer(state = initalState, action){
  let index, newCodes;

  switch (action.type) {
    case "CHANGE_STATUS":
      return Object.assign({}, state, {
        status: action.status
      })

    case "CHANGE_SIDE":
      return Object.assign({}, state, {
        sideActive: !state.sideActive
      })
    // AUTH
    case "LOGIN":
      return Object.assign({}, state, {
        auth: {
          loggedIn: true,
          token: action.payload.token,
          currentUser: action.payload.user
        },
        code: {
          ...state.code,
          codes: action.payload.codes
        },
        challenge: {
          ...state.challenges,
          challenges: action.payload.challenges
        }
      });

    case "LOGOUT":
      return Object.assign({}, state, {
        auth: {
          token: null,
          loggedIn: false,
          currentUser: null
        },
        code: {
          ...state.codes,
          codes: [],
          currentId: null
        }
      })

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
          codes: newCodes,
        }
      });

    case "LOAD_CODE":
      return Object.assign({}, state, {
        status: 'code',
        code: {
          ...state.code,
          input: action.payload.content,
        }
      })

    case "DELETE_CODE":
      index = state.code.codes.findIndex(code => {
        return code.id === action.payload.code_id
      });

      let currentCode;
      if (state.code.currentId === action.payload.code_id) {
        currentCode = null
      } else {
        currentCode = state.code.currentId
      }

      newCodes = state.code.codes.slice()
      newCodes.splice(index, 1)

      return Object.assign({}, state, {
        code: {
          ...state.code,
          codes: newCodes,
          currentId: currentCode
        }
      });

      case "LOAD_CHALLENGE":
        return Object.assign({}, state, {
          status: 'challenge',
          code: {
            ...state.code,
            input: action.payload.content,
            output: '',
            currentId: null
          },
          challenge: {
            ...state.challenge,
            current: action.payload.challenge
          }
        })

      case "CREATE_CHALLENGE":
        return Object.assign({}, state, {
          challenge: {
            ...state.challenge,
            challenges: [action.payload, ...state.challenge.challenges]
          }
        })

      case "RESET":
        return Object.assign({}, state, {
          status: 'code',
          code: {
            ...state.code,
            input: '',
            output: '',
            currentId: null
          },
          challenge: {
            ...state.challenge,
            current: null
          }
        })

    default:
      return state;
  }
}
