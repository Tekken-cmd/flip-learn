import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div>
        <a className='button' href={props.url}>{props.title}</a>
    </div>
  )
}

export default Button;