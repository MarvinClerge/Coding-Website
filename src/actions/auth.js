import userAdapter from '../adapter/user_adapter'

export const signup = input => {
  return dispatch => {
    userAdapter.signup(input)
    .then(data => {
      if (!data.error) {
        localStorage.setItem('token', data.token)
        let payload = {
          user: data.user,
          token: data.token,
          codes: data.codes
        }
        dispatch(loginReducer(payload))
      } else {
        alert(data.error)
      }
    })
  }
}

export const login = input => {
  return dispatch => {
    userAdapter.login(input)
    .then(data => {
      if (!data.error) {
        localStorage.setItem('token', data.token)
        let payload = {
          user: data.user,
          token: data.token,
          codes: data.codes,
          challenges: data.challenges
        }
        dispatch(loginReducer(payload))
      } else {
        alert(data.error)
      }
    })
  }
}

export const setUser = token => {
  return dispatch => {
    userAdapter.currentUser(token)
    .then(data => {
      if (token && !data.error) {
        localStorage.setItem('token', token)
        let payload = {
          token,
          user: data.user,
          codes: data.codes,
          challenges: data.challenges,
        }
        dispatch(loginReducer(payload))
      } else {
        let payload = {
          challenges: data.challenges
        }
        dispatch(challengeReducer(payload))
      }

    })
  }
}

const loginReducer = payload => {
  console.log(payload);
  return {
    type: "LOGIN",
    payload: payload
  }
}

const challengeReducer = payload => {
  console.log(payload);
  return {
    type: "SET_CHALLENGES",
    payload: payload
  }
}
