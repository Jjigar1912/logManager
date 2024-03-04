import React from 'react'
import '../../styles/components/login.css';
import gitHub from '../../assets/github-mark.png';

function Login() {
  return (
    <div className='login-container'>
        <div className='login-image'>
            <img src='https://source.unsplash.com/random?wallpapers' alt='Image'/>
        </div>
        <div className='login-form'>
            <p>Login to L<span style={{ color : 'orange' }}>o</span>gF<span style={{ color : 'orange' }}>o</span>rge</p>
            <form className='login'>
                <div>
                    <input type='text' name='username' placeholder='Enter Your Username' required />
                </div>
                <div>
                    <input type='password' name='password' placeholder='Enter Your Password' required />
                </div>
                <div>
                    <input type='submit' name='login' value='Signin' />
                </div>
            </form>
            <h5 className='login-new'>CREATE NEW ACCOUNT</h5>
            <h3 className='login-or'>OR Login With</h3>
            <div>
                <button className='btn-social'>
                    <div>
                        <img src='https://cdn.kekastatic.net/login/v/M170_2024.02.14.1/images/logos/google.svg'/>
                        <span>Google</span>
                    </div>
                </button>
                <button className='btn-social'>
                    <div>
                        <img src={gitHub} className='img-20' alt='GitHub'/>
                        <span>GitHub</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login