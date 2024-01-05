import React from "react";
import { Link } from "react-router-dom";
import layout from "../components/layout";
import dsLogo from "../components/logo/dsLogo";
import mbLogo from "../components/logo/mbLogo";
import arrowRight from "../assets/arrow-right.png";
import arrowLeft from "../assets/arrow-left-50.png";
const InvitationCheckBox = () => {
  return layout(
    <div className="invitationCbox">
      <div className="invitation-cbox-left container d-none d-md-flex flex-column">
        <div className="row-invitation-cbox justify-space-between">
          {dsLogo()}
          <div className="sign-up-container">
            <div className="form-title">
              <h2 className="form-title-h2">
                One last question, how did you hear about us?
              </h2>
            </div>
            <div className="sign-up-form">
              <div className="list-check">
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="TV / Streaming service"
                        id="1"
                    />
                    <label className="form-check-label" htmlFor="1">
                        TV / Streaming service
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="YouTube ad"
                        id="2"
                    />
                    <label className="form-check-label" htmlFor="2">
                        YouTube ad
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Audio ad (Podcast, Spotify)"
                        id="3"
                    />
                    <label className="form-check-label" htmlFor="3">
                        Audio ad (Podcast, Spotify)
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Consultant"
                        id="4"
                    />
                    <label className="form-check-label" htmlFor="4">
                        Consultant
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Software review sites"
                        id="5"
                    />
                    <label className="form-check-label" htmlFor="5">
                        Software review sites
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Friend / Colleague"
                        id="6"
                    />
                    <label className="form-check-label" htmlFor="6">
                        Friend / Colleague
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Billboard / Public transit ad"
                        id="7"
                    />
                    <label className="form-check-label" htmlFor="7">
                        Billboard / Public transit ad
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="LinkedIn"
                        id="8"
                    />
                    <label className="form-check-label" htmlFor="8">
                        LinkedIn
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Search engine (Google, Bing, etc.)"
                        id="9"
                    />
                    <label className="form-check-label" htmlFor="9">
                        Search engine (Google, Bing, etc.)
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Social media (Facebook, Instagram, Reddit, etc.)"
                        id="10"
                    />
                    <label className="form-check-label" htmlFor="10">
                        Social media (Facebook, Instagram, Reddit, etc.)
                    </label>
                    </div>
                </div>
                <div className="box-container">
                    <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="Other"
                        id="11"
                    />
                    <label className="form-check-label" htmlFor="11">
                        Other
                    </label>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={"../invitation1"}
            type="submit"
            className="btn btn-back"
          >
            <img className="back-icon" src={arrowLeft} alt="" />
            Back
          </Link>
          <Link
            to={"../invite"}
            type="submit"
            className="btn btn-primary btn-sign-up-form"
          >
            Continute
            <img className="submit-icon" src={arrowRight} alt="" />
          </Link>
        </div>
      </div>
      <div className="invitation-cbox-left-mb d-block d-md-none">
        <div className="sign-up-container">
          <div className="form-title">
            <h1 className="form-title-h1">
              What best describes your current role?
            </h1>
          </div>
          <div className="sign-up-form"></div>
          {mbLogo()}
        </div>
      </div>
    </div>
  );
};

export default InvitationCheckBox;
