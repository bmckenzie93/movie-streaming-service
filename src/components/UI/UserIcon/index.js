import React, { useContext } from 'react'
import './UserIcon.scss'


const UserIcon = ({theme}) => {
  // takes in user prop with profile color, initials, image
  console.log(theme)
  return (
    <div className={`user-icon theme-${theme}`}>
      <div className="user-icon__image-circle-border">
        <div className="user-icon__image-circle-inner">
          <span className="user-icon__image-circle">
            {/* if profile image - image, else initial */}
            BM
          </span>
        </div>
      </div>
      <span className="user-icon__info">Brandon</span>
    </div>
  )
}

export default UserIcon