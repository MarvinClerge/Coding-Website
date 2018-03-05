import challengeAdapter from '../adapter/challenge_adapter'

export const loadChallenge = challenge => {
  let content = `//${challenge.description}
function challenge(value){
  ${challenge.content}
}`

  let payload = {
    challenge,
    content: content
  }

  return {
    type: "LOAD_CHALLENGE",
    payload: payload
  }
}

export const createChallenge = value => {
  return dispatch => {
    console.log(value);
    challengeAdapter.submitChallenge(value)
    .then(data => {
      if (!data.error) {
        dispatch(createReducer(data))
      } else {
        alert(data.error)
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
