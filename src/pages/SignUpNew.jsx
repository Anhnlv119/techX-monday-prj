import React from 'react'
import { Link } from 'react-router-dom'

const SignUpNew = () => {
  return (
    <>
        <div className="SignUpNew row">
          <div className="SignUpNew-left col-12 col-md-7 container d-flex flex-column align-items-center justify-content-center">
            <div className="row-sign-up d-flex flex-column justify-content-center align-items-center">
              <div className="welcome-text">
                <h1 className='welcome-h1'>Welcome to monday.com</h1>
                <h2 className='welcome-h2'>Get started - it's free. No credit card needed.</h2>
              </div>
              <div className="sign-up-content text-center">
                <div className="sign-up-with-google">
                  <button className='sign-up-with-google-button'><svg className='d-inline google-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg><span className='google-text'> Continue with Google</span></button>
                </div>
                <div className="line-center">
                  <div className="line line-left"></div>
                  <p className='line-text'>Or</p>
                  <div className="line line-right"></div>
                </div>
                <div className="sign-up-with-mail">
                  <div className="input-mail">
                    <input type="text" placeholder='name@compant.com'/>
                  </div>
                  <div className="button-continue">
                    <Link to={'../invitation'} className='input-mail-button'>Continue</Link>
                  </div>
                </div>
                <div className="term-container">
                  <div className="term-text">By proceeding, you agree to the</div>
                  <div className="term-link">
                    <a href="#">Terms of Service</a>
                    <span className='term-span'> and </span>
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-allready">
              <h3 className='login-allready-h3'>Already have an account? <a href="#">Log in</a></h3>
            </div>
          </div>
          <div className="SignUpNew-right d-none d-md-block col-md-5"></div>
        </div>
    </>
  )
}

export default SignUpNew