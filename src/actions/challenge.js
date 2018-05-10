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
  let info = {
    title: data.title,
    description: data.description,
    test_description: data.testDescription,
    test_value: data.testValue.value,
    test_value_type: data.testValue.type,
    test_expected: data.testExpected.value,
    test_expected_type: data.testExpected.type,
    user_id: data.user_id
  }

  return dispatch => {
    challengeAdapter.submitChallenge(info)
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
