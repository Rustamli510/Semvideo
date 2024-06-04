import React from 'react'
import '../Style/Pages/Signİn.scss'
import Logo from '../assets/Logo/Untitled_design__6_-removebg-preview 1.svg'
import Walpaper from '../assets/İmages/Group 401.png'

function Signİn() {
  return (
    <section className='signIn'>
        <div className="signIn-left">
            <div className="header">
                <img src={Logo} alt="" />
            </div>

            <div className="inputs">
                <div className="inputs-top">
                    <h2>Sign in</h2>
                    <p>Please login to continue to your account.</p>
                </div>
            </div>
        </div>

        <div className="walpaper">
            <img src={Walpaper} alt="" />
        </div>
    </section>
  )
}

export default Signİn