import React from 'react'

const Tab = props => {
  function handleClass(){
    if (props.active === props.type) {
      return "active-tab"
    } else {
      return "inactive-tab"
    }
  }
  
  return(
    <div className={handleClass()} onClick={() => props.click(props.type)}>
      {props.title}
    </div>
  )
}

export default Tab
