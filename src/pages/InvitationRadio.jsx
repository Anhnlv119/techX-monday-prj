import React from "react";
import { Link } from "react-router-dom";
import layout from "../components/layout";
import dsLogo from"../components/logo/dsLogo"
import mbLogo from '../components/logo/mbLogo';
import arrowRight from "../assets/arrow-right.png";
const Invitation1 = () => {
  return (
      layout(
      <div className="Invitation1">
        <div className="invitation1-left container d-none d-md-flex flex-column">
          <div className="row-invitation1 justify-space-between">
            {dsLogo()}
            <div className="sign-up-container">
              <div className="form-title">
                <h1 className="form-title-h1">
                  Hey there, what brings you here today?
                </h1>
              </div>
              <div className="sign-up-form">
                <div className="list-radio">
                    <div className="radio-container">
                        <div className="form-check form-check-inline sign-up-radio-item">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="Work"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                            Work
                            </label>
                        </div>
                    </div>
                    <div className="radio-container">
                        <div className="form-check form-check-inline sign-up-radio-item">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="Personal"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                            Personal
                            </label>
                        </div>
                    </div>
                    <div className="radio-container">                    
                        <div className="form-check form-check-inline sign-up-radio-item">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            defaultValue="School"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio3">
                            School
                            </label>
                        </div>
                    </div>
                    <div className="radio-container">
                        <div className="form-check form-check-inline sign-up-radio-item">
                            <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio4"
                            defaultValue="Nonprofits"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio4">
                            Nonprofits
                            </label>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="sign-up-container sign-up-container-2">
              <div className="form-title">
                <h1 className="form-title-h1">What best describes your current role?</h1>
              </div>
              <div className="sign-up-form">
              <div className="list-radio">
                <div className="radio-container">                   
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio5"
                        defaultValue="Business owner"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio5">
                            Business owner
                        </label>
                    </div>
                </div>
                <div className="radio-container">                    
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio6"
                        defaultValue="Team leader"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio6">
                            Team leader
                        </label>
                    </div>
                </div>
                <div className="radio-container">                   
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio7"
                        defaultValue="Team member"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio7">
                            Team member
                        </label>
                    </div>
                </div>
                <div className="radio-container">                   
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio8"
                        defaultValue="Freelancer"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio8">
                            Freelancer
                        </label>
                    </div>
                </div>
                <div className="radio-container">                   
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio9"
                        defaultValue="Director"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio9">
                            Director
                        </label>
                    </div>
                </div>
                <div className="radio-container">                   
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio10"
                        defaultValue="C-Level"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio10">
                            C-Level
                        </label>
                    </div>
                </div>
                <div className="radio-container">                  
                    <div className="form-check form-check-inline sign-up-radio-item">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio11"
                        defaultValue="VP"
                        />
                        <label className="form-check-label" htmlFor="inlineRadio11">
                        VP
                        </label>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <Link  to={'../invitationCheckBox'} type="submit" className="btn btn-primary btn-sign-up-form">
                    Continute<img className="submit-icon" src={arrowRight} alt="" />
            </Link>
          </div>
        </div>
        <div className="invitation1-left-mb d-block d-md-none">
          <div className="sign-up-container">
            <div className="form-title">
              <h1 className="form-title-h1">
                What best describes your current role?
              </h1>
            </div>
            <div className="sign-up-form">
                
            </div>
            {mbLogo()}
          </div>
        </div>
      </div>
      )

  );
};

export default Invitation1;
