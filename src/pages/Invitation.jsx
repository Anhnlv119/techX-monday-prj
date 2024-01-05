import React, {useEffect, useState} from "react";
import arrowRight from "../assets/arrow-right.png";
import { Link } from "react-router-dom";
import dsLogo from"../components/logo/dsLogo"
import mbLogo from '../components/logo/mbLogo';
import layout from "../components/layout";
const user = {
  fullName: '',
  password: '',
  accountName: '',
}
const Invitation = () => {
  const [userData, setUserData] = useState(user)
  const [validateMess, setValidateMess] = useState("")
  const handleChangeUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const checkInput = (fieldName) => {
    const inputElement = document.getElementById(fieldName);
    const textValidate = document.getElementById(`validate-${fieldName}`);
    if (!userData[fieldName].length) {
      inputElement.classList.add('sign-up-validate');
      textValidate.style.display = 'block';
    } else {
      inputElement.classList.remove('sign-up-validate');
      textValidate.style.display = 'none';
    }
  };

  const checkInputMB = () => {
    const inputElement = document.getElementById('fullNameMb');
    const textValidate = document.getElementById("validate-fullNameMb");
    if (!userData.fullName.length) {
      inputElement.classList.add('sign-up-validate');
      textValidate.style.display = 'block';
    } else {
      inputElement.classList.remove('sign-up-validate');
      textValidate.style.display = 'none';
    }
  };

  const checkInputPassword = () =>{
    const inputElement = document.getElementById('password');
    if(userData.password.length == 0){
      inputElement.classList.add('sign-up-validate');
      setValidateMess("Create a password")
    }
    else if(userData.password.length < 8){
      inputElement.classList.add('sign-up-validate');
      setValidateMess("Password must be 8 characters or more")
    } else {
      inputElement.classList.remove('sign-up-validate');
    }
  }

  const activeButon = () => {
    const btnSubmit = document.getElementById('btn-mobile');
    if(userData.password.length >= 8 && userData.fullName.length > 0){
      btnSubmit.classList.remove('disabled');
    } else {
      btnSubmit.classList.add('disabled');
    }
  }
   useEffect(() =>{
    activeButon()
   }, [userData])
  return (
      layout(
      <div className="Invitation">
        <div className="invitation-left container d-none d-md-flex flex-column">
          <div className="row-invitation justify-space-between">
            {dsLogo}
            <div className="sign-up-container">
              <div className="form-title">
                <h1 className="form-title-h1">Create your account</h1>
              </div>
              <div className="sign-up-form">
                <form>
                  <div className="sign-up-item">
                    <label htmlFor="fullName" className="form-label sign-up-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control sign-up-input"
                      id="fullName"
                      name="fullName"
                      value={userData.fullName}
                      onChange={handleChangeUserData}
                      onBlur={() => checkInput('fullName')}
                    />
                    <div 
                      id="validate-fullName" 
                      className="form-text sign-up-danger mt-0">
                        Enter your full name
                    </div>
                  </div>
                  <div className="sign-up-item">
                    <label
                      htmlFor="password"
                      className="form-label sign-up-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control sign-up-input"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChangeUserData}
                      onBlur={checkInputPassword}
                    />
                    <div 
                      style={{ display: userData.password.length < 8 ? 'block' : 'none' }}
                      id="validate-password" 
                      className="form-text sign-up-danger mt-0">
                        {validateMess}
                      </div>
                  </div>
                  <div className="sign-up-item">
                    <label
                      htmlFor="accountName"
                      className="form-label sign-up-label"
                    >
                      Account name
                    </label>
                    <input
                      type="text"
                      className="form-control sign-up-input"
                      id="accountName"
                      name="accountName"
                      value={userData.accountName}
                      onChange={handleChangeUserData}
                      onBlur={() => checkInput('accountName')}
                    />
                    <div 
                      id="validate-accountName" 
                      className="form-text sign-up-danger mt-0">
                        Name your account
                      </div>
                  </div>
                  <Link  to={'../invitation1'} type="submit" className="btn btn-primary btn-sign-up-form">
                    Continute<img className="submit-icon" src={arrowRight} alt="" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="invitation-left-mb d-block d-md-none">
          <div className="sign-up-container">
              <div className="form-title">
                <h1 className="form-title-h1">Sign up for free</h1>
              </div>
              <div className="sign-up-form">
                <form>
                  <div className="sign-up-item">
                    <label htmlFor="fullName" className="form-label sign-up-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control sign-up-input"
                      id="fullNameMb"
                      name="fullName"
                      value={userData.fullName}
                      onChange={handleChangeUserData}
                      onBlur={checkInputMB}
                    />
                    <div 
                      id="validate-fullNameMb" 
                      className="form-text sign-up-danger mt-0">
                        Required
                    </div>
                  </div>
                  <div className="sign-up-item">
                    <label
                      htmlFor="password"
                      className="form-label sign-up-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control sign-up-input"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChangeUserData}
                      onBlur={checkInputPassword}
                    />
                    <div 
                      style={{ display: userData.password.length < 8 ? 'block' : 'none' }}
                      id="validate-password" 
                      className="form-text sign-up-danger mt-0">
                        {validateMess}
                      </div>
                  </div>
                  <Link to={'../invitation1'} type="submit" id="btn-mobile" className="btn btn-primary btn-sign-up-form disabled">
                    Continute
                  </Link>
                </form>
              </div>
                {mbLogo}
            </div>
        </div>
      </div>
      )

  );
};

export default Invitation;
