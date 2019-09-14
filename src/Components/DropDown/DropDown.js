import React from "react";
import "./DropDown.scss";
import { Link } from "react-router-dom";

import { toggleHideDropdown } from "../../Redux/Drop/drop-actions";

import { connect } from "react-redux";

const DropDown = ({ toggleHideDropdown }) => {
  return (
    <div className="overlay">
      <div className="exit">
        <ul>
          <li className="exitmenu" onClick={toggleHideDropdown}>
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <div className="overlay-content" onClick={toggleHideDropdown}>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Portfolio</Link>
        <a href="google.com">Resume</a>
        <a href="google.com">Linkedin</a>
        <a href="google.com">Github</a>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleHideDropdown: () => dispatch(toggleHideDropdown())
});

export default connect(
  null,
  mapDispatchToProps
)(DropDown);
