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
        <Link to="/projects">Projects</Link>
        <div
          className="option"
          onClick={() =>
            window.open(`http://bit.ly/ShivamAimaResume`, "_blank")
          }
        >
          Resume
        </div>
        <div
          className="option"
          onClick={() =>
            window.open(`https://bit.ly/shivam_linkedin`, "_blank")
          }
        >
          Linkedin
        </div>
        <div
          className="option"
          onClick={() =>
            window.open(`https://bit.ly/shivam_github`, "_blank")
          }
        >
          Github
        </div>
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
