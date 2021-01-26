import React, { Fragment, useState } from "react";
import "./Homepage.scss";
import Profile from "./Profile.jpg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Header from "../../Components/Header/Header";
import Thanos from "react-thanos";
import StarWars from "../../Components/StarWars/StarWars";

const Homepage = ({ history }) => {
  const [snapp, setSnapp] = useState(false);
  return (
    <Fragment>
      <div className="homepage">
        <div className="content">
          <Header homepage className="navheader" />
          {snapp ? (
            <StarWars />
          ) : (
            <div className="homepage-container">
              <div>
                <img src={Profile} alt="profile" className="profileimage" />
              </div>
              <div className="text-box">
                <h1 className="title">Hi, I'm Shivam Aima.</h1>
                <span className="subtitle">A Full Stack Developer</span>
              </div>
              <div className="buttons-container">
                <div className="buttons">
                  <CustomButton onClick={() => history.push("/skills")}>
                    My Skills
                  </CustomButton>
                  <CustomButton onClick={() => history.push("/projects")}>
                    Projects
                  </CustomButton>
                  <CustomButton onClick={() => window.open(`http://bit.ly/notfound`, "_blank")}>
                    Resume
                  </CustomButton>
                  <CustomButton
                    onClick={() =>
                      window.open(`https://bit.ly/shivam_linkedin`, "_blank")
                    }
                  >
                    Linkedin
                  </CustomButton>
                  <CustomButton
                    onClick={() =>
                      window.open(`https://bit.ly/shivam_github`, "_blank")
                    }
                  >
                    Github
                  </CustomButton>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="footer">
          <Thanos
            className="thanos"
            onSnap={() => setSnapp(!snapp)}
            onSnapReverse={() => setSnapp(!snapp)}
          />
          <div className="text">
            <h1 className="made">Copyright©2019, ReactJS is</h1>
            <i className="fa fa-heart-o heart-off" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
