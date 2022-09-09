import React from 'react'
import './ButtonLink.scss'

const ButtonLink = (props) => {
  return (
    <button className='button-link'>
      {props.children}
    </button>
  )
}

export default ButtonLink