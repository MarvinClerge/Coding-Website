const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const submitChallenge = (value) => {
  return fetch('http://localhost:3001/api/v1/submit', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      form: value.form,
      user_id: value.user.id
    })
  })
  .then(response => response.json())
}

const challengeAdapter = {
  submitChallenge: submitChallenge
}
export default challengeAdapter
