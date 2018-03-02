export const changeStatus = status => {
  return {
    type: "CHANGE_STATUS",
    status: status
  }
}

export const changeSideActive = () => {
  return {
    type: "CHANGE_SIDE"
  }
}
