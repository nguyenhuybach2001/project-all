import React from 'react'
import PropTypes from 'prop-types'

function ButtonComponent(props) {
  return (
  
      <li className={`${props.isActive?'active':''}`}>
        <a onClick={props.onClick}>{props.title}</a>
      </li>
  
  )
}
ButtonComponent.defaultProps={
  isActive:false,
  onClick:()=>{}
}

ButtonComponent.propTypes = {
  isActive:PropTypes.bool,
  title:PropTypes.string,
  onclick:PropTypes.func
}

export default ButtonComponent


