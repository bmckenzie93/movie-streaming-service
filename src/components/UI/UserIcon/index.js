import React from 'react'
import './UserIcon.scss'


const UserIcon = ({theme, userName}) => {
  // takes in user prop with profile theme, initials, image
  return (
    <div className={`user-icon theme-${theme}`}>
      <div className="user-icon__image-circle-border">
        <div className="user-icon__image-circle-inner">
          <span className="user-icon__image-circle">
            {/* if profile image - image, else initials */}
            {userName.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </div>
      <span className="user-icon__info">{userName}</span>
    </div>
  )
}

export default UserIcon