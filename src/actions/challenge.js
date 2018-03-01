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
    challengeAdapter.submitChallenge(value)
    .then(console.log)
    dispatch(createReducer(value))
  }


}

const createReducer = (payload) => {
  return {
    type: "HELLO"
  }
}
