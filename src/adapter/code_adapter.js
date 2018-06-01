const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const saveCode = (payload) => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/save', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user_id: payload.user_id,
      code_id: payload.code_id,
      code: payload.input
    })
  })
  .then(response => response.json())
}

const deleteCode = (code) => {
  return fetch('https://guarded-citadel-80230.herokuapp.com/api/v1/delete', {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({
      code_id: code.id
    })
  })
  .then(response => response.json())
}


const codeAdapter = {
  saveCode: saveCode,
  deleteCode: deleteCode,
}

export default codeAdapter;
