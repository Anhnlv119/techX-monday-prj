import React from "react";
import { Link } from "react-router-dom";
import layout from "../components/layout";
import dsLogo from "../components/logo/dsLogo";
import mbLogo from "../components/logo/mbLogo";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const InviteMember = () => {
    const changeDropDown = (item) => {
        console.log(item)
    }

  return layout(
    <div className="inviteMember">
      <div className="invite-member-left container d-none d-md-flex flex-column">
        <div className="row-invite-member justify-space-between">
          {dsLogo()}
          <div className="sign-up-container">
            <div className="form-title">
              <h2 className="form-title-h2">Invited your teammates</h2>
              <p className="form-title-p">
                Collaborate with your team to get the most out of monday.com
              </p>
            </div>
            <div className="sign-up-form">
              <div className="list-input">
                <div className="input-container">
                  <InputGroup className="mb-3 input-group">
                    <Form.Control
                      className="input-data"
                      placeholder="Add email here"
                      aria-label="Text input with dropdown button"
                    />
                    <DropdownButton
                      className="btn-dropdown"
                      variant="outline-secondary"
                      title="Dropdown"
                      id="input-group-dropdown-2"
                      align="end"
                    >
                      <Dropdown.Item className="dropdown-item">
                        <h5 className="dropdown-h5">Admin</h5>
                        <p className="dropdown-p">Can invite & manage new users</p>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <h5 className="dropdown-h5">Member</h5>
                        <p className="dropdown-p">Can add and edit content</p>
                      </Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
                <div className="input-container">
                  <InputGroup className="mb-3 input-group">
                    <Form.Control
                      className="input-data"
                      placeholder="Add email here"
                      aria-label="Text input with dropdown button"
                    />
                    <DropdownButton
                      className="btn-dropdown"
                      variant="outline-secondary"
                      title="Dropdown"
                      id="input-group-dropdown-2"
                      align="end"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        <h5 className="dropdown-h5">Admin</h5>
                        <p className="dropdown-p">
                          Can invite & manage new users
                        </p>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        <h5 className="dropdown-h5">Member</h5>
                        <p className="dropdown-p">Can add and edit content</p>
                      </Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
              </div>
              <button className="add-btn">+  Add another</button>
            </div>
          </div>
          <Link to={"../invitation1"} type="submit" className="btn btn-back">
            Remind me late
          </Link>
          <Link
            to={"../invite"}
            type="submit"
            className="btn btn-primary btn-sign-up-form"
          >
            Invite your team
          </Link>
        </div>
      </div>
      <div className="invite-member-left-mb d-block d-md-none">
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

export default InviteMember;
