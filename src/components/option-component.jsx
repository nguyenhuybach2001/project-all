import React from 'react'
import PropTypes from 'prop-types'

function OptionComponent(props) {
  return (
    <div className="dropdown">
      <a
        className="btn btn-outline-secondary dropdown-toggle btn-block is-circle"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="icon24-sort-down-black icon-left" />
        {props.title}
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" onClick={props.func1}>
          {props.option1}
        </button>
        <button className="dropdown-item" onClick={props.func2} >
          {props.option2}
        </button>
      </div>
    </div>
  )
}

OptionComponent.propTypes = {
  title:PropTypes.string,
  option1:PropTypes.string,
  option2:PropTypes.string,
  func1:PropTypes.func,
  func:PropTypes.func

}

export default OptionComponent
