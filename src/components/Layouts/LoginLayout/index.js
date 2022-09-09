import React from 'react'
import logo from '../../../images/logo.svg'
import Button from '../../UI/Buttons/Button'
import ButtonLInk from '../../UI/Buttons/ButtonLink'
import './LoginLayout.scss'

const LoginLayout = (props) => (
  <div className='login-layout'>
    <header className='login-layout__header'>
      <img src={logo} alt="HBO MAX" />
      <h1>who is watching?</h1>
    </header>

    <section className='login-layout__content'>
      {props.children}
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
  </div> 
)

export default LoginLayout  