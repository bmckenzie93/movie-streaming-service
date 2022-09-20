import React, { useContext } from 'react'
import UserIcon from '../UI/UserIcon'
import './CreateUser.scss'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContextProvider'

const CreateUser = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <>
      <UserIcon theme={state.theme} />

      <form className='create-profile' action="#">
        <div className="create-profile__name input-group">
          <input type="text" name="create_profile__name" id="profileName" />
          <label htmlFor="create_profile__name">Name</label>
        </div>
        <ul className='create-profile__color-picker'>
          <li className={`create-profile__color-picker__color create-profile__color-picker__color--red ${state.theme === 'red' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_RED'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--orange ${state.theme === 'orange' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_ORANGE'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--yellow ${state.theme === 'yellow' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_YELLOW'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--green ${state.theme === 'green' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_GREEN'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--blue ${state.theme === 'blue' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_BLUE'})
            }}></li>

          <li className={`create-profile__color-picker__color create-profile__color-picker__color--violet ${state.theme === 'violet' ? 'active' : ''}`}
            onClick={()=> {
              dispatch({type: 'THEME_VIOLET'})
            }}></li>
        </ul>
      </form>
    </>
  )
}

export default CreateUser