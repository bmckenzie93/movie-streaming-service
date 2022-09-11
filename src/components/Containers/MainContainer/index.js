import React from 'react'
import './MainContainer.scss'

const MainContainer = (props) => {
  return (
    <main className='main-container'>
      {props.children}
    </main>
  )
}

export default MainContainer