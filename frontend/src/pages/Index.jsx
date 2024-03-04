import React from 'react'
import GitHub from '../components/auth/GitHub.jsx'
import GoogleLogin from '../components/auth/GoogleLogin.jsx'
import Login from '../components/auth/Login.jsx'
import '../styles/pages/index.css';

function Index() {
  return (
    <>  
        <div className='main'>
            <div className='header'>
                <h1> L<span style={ { color : 'orange' } }>o</span>gF<span style={ { color : 'orange' } }>o</span>rge</h1>
            </div>
        </div>
        <Login />
        <GitHub />
        <GoogleLogin />
    </>
  )
}

export default Index;