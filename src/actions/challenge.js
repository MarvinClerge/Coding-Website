import challengeAdapter from '../adapter/challenge_adapter'

export const loadChallenge = challenge => {
  let content = `// ${challenge.description}
function challenge(argument){
  // ENTER CODE HERE
}`

  let payload = {
    challenge,
    content
  }

  return {
    type: "LOAD_CHALLENGE",
    payload: payload
  }
}

export const createChallenge = data => {
  return dispatch => {
    challengeAdapter.submitChallenge(data)
    .then(response => {
      if (!response.error) {
        dispatch(createReducer(response))
      } else {
        alert(response.error)
      }
    })
  }
}

const createReducer = (payload) => {
  return {
    type: "CREATE_CHALLENGE",
    payload: payload
  }
}

export const loadAllChallenges = () => {
  return dispatch => {
    challengeAdapter.getChallenges()
    .then(data => {
      dispatch(loadAllReducer(data))
    })
  }
}

const loadAllReducer = (data) => {
  return {
    type: "SET_CHALLENGES",
    payload: {
      challenges: data
    }
  }
}
