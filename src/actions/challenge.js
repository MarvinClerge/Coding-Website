export const loadChallenge = challenge => {
  let content = `//${challenge.description}
function challenge(value){
  ${challenge.content}
}`

  let payload = {
    challenge,
    content: content
  }

  console.log(challenge);
  return {
    type: "LOAD_CHALLENGE",
    payload: payload
  }
}
