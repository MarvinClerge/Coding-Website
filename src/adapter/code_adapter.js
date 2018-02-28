const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const tester = (payload) => {
  return fetch('http://localhost:3001/api/v1/save', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user_id: payload.user_id,
      code_id: payload.code_id,
      code: payload.input,
      language: payload.language
    })
  })
  .then(response => response.json())
}

const deleteCode = (code) => {
  return fetch('http://localhost:3001/api/v1/delete', {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({
      code_id: code.id
    })
  })
  .then(response => response.json())
}


const codeAdapter = {
  tester: tester,
  deleteCode: deleteCode,
}

export default codeAdapter;
