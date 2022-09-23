import React, { useContext, useEffect, useState } from 'react'
import UserIcon from '../UI/UserIcon'
import './CreateUser.scss'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContextProvider'

const CreateUser = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const globalState = useContext(GlobalStateContext)
  const [ nameInputState, setNameInputState ] = useState('')

  return (
    <>
      <UserIcon 
        theme={globalState.theme} 
        userName={nameInputState}/>

      <form className='create-profile' action="#">
        <div className="create-profile__name input-group">
          <input 
            type="text" 
            name="create_profile__name" 
            id="profileName"
            maxlength="12"
            value={nameInputState}
            onChange={ e => {
              setNameInputState(e.target.value)
            }} />
          <label htmlFor="create_profile__name">Name</label>
        </div>

        <ul className='create-profile__color-picker'>
          <li className={`create-profile__color-picker__color create-profile__color-picker__color--red ${globalState.theme === 'red' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_RED'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--orange ${globalState.theme === 'orange' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_ORANGE'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--yellow ${globalState.theme === 'yellow' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_YELLOW'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--green ${globalState.theme === 'green' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_GREEN'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--blue ${globalState.theme === 'blue' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_BLUE'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--violet ${globalState.theme === 'violet' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_VIOLET'})
            }}></li>
        </ul>
      </form>
    </>
  )
}

export default CreateUser