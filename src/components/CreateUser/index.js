import React from 'react'
import UserIcon from '../UI/UserIcon'
import './CreateUser.scss'

const CreateUser = () => {
  return (
    <>
      <UserIcon />

      <form className='create-profile' action="#">
        <div className="create-profile__name input-group">
          <input type="text" name="create_profile__name" id="profileName" />
          <label htmlFor="create_profile__name">Name</label>
        </div>
        <ul className='create-profile__color-picker'>
          <li className='create-profile__color-picker__color create-profile__color-picker__color--red active'></li>
          <li className='create-profile__color-picker__color create-profile__color-picker__color--orange'></li>
          <li className='create-profile__color-picker__color create-profile__color-picker__color--yellow'></li>
          <li className='create-profile__color-picker__color create-profile__color-picker__color--green'></li>
          <li className='create-profile__color-picker__color create-profile__color-picker__color--blue'></li>
          <li className='create-profile__color-picker__color create-profile__color-picker__color--violet'></li>
        </ul>
      </form>
    </>
  )
}

export default CreateUser