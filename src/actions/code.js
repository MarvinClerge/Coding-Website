import codeAdapter from '../adapter/code_adapter'

export const changeInput = value => {
  return {
    type: "INPUT",
    value: value
  }
}

export const changeOutput = value => {
  return {
    type: "OUTPUT",
    value: value
  }
}

export const changeCodeValue = (code) => {
  let payload = {
    type: code.type,
    value: code.value
  }

  return {
    type: "CHANGE_CODE_VALUE",
    payload: payload
  }
}

export const saveCode = (data) => {
  return dispatch => {
    let input = data.input ? data.input : "//empty"

    codeAdapter.tester({
      user_id: data.userId,
      code_id: data.codeId,
      input: input,
      language: "javascript"
    })
    .then(result => {
      if (!data.codeId) {
        dispatch(createCodeReducer(result))
      } else {
        dispatch(saveCodeReducer(result))
      }
    })
  }


}

const createCodeReducer = data => {
  return {
    type: "CREATE_CODE",
    payload: data
  }
}

const saveCodeReducer = data => {
  return {
    type: "SAVE_CODE",
    payload: data
  }
}

export const loadCode = (code) => {
  return {
    type: "LOAD_CODE",
    payload: code
  }
}

export const deleteCode = (code) => {
  if (window.confirm("Are you sure?")) {
    return dispatch => {
      codeAdapter.deleteCode(code)
      .then(data => {
        if (data.message) {
          dispatch(deleteCodeReducer(data))
        }
      })
    }
  } else {
    return dispatch => {}
  }
}

const deleteCodeReducer = (payload) => {
  return {
    type: "DELETE_CODE",
    payload: payload
  }
}
