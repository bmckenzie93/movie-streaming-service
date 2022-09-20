import React, { useContext } from 'react'
import logo from '../../../images/logo.svg'
import Button from '../../UI/Buttons/Button'
import ButtonLInk from '../../UI/Buttons/ButtonLink'
import MainContainer from '../../Containers/MainContainer'
import './LoginLayout.scss'
import { GlobalStateContext } from '../../../context/GlobalContextProvider'

const LoginLayout = (props) => {
  // user state
  const state = useContext(GlobalStateContext)
  
  return (
  <main className={`login-layout theme-${state.theme}`}>
    <header className='login-layout__header'>
      <img src={logo} alt="HBO MAX" />
      {/* If users, who is watching, else Create Profile */}
      <h1>create profile</h1>
    </header>

    <section className='login-layout__content'>
      <MainContainer>
        {props.children}
      </MainContainer>
    </section>

    <section className="login-layout__options">
      <div className="login-layout__options__add-user">
        <Button>add adult</Button>
        <Button>add kid</Button>
      </div>
      
      <div className='login-layout__options__manage-profiles'>
        <ButtonLInk>manage profiles</ButtonLInk>
      </div>
    </section>
  </main> 
)}

export default LoginLayout  