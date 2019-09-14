import React from "react";
import "./SocialIcons.scss";

const SocialIcons = () => {
  return (
    <div className="wrapper">
      <ul>
        <li
          className="facebook"
          onClick={() => window.open(`http://bit.ly/shivam_facebook`, "_blank")}
        >
          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </li>
        <li
          className="instagram"
          onClick={() =>
            window.open(`http://bit.ly/shivam_instagram`, "_blank")
          }
        >
          <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </li>
        <li
          className="google"
          onClick={() =>
            window.open(`mailto:shivamaima619@gmail.com`, "_blank")
          }
        >
          <i className="fa fa-google fa-2x" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  );
};
export default SocialIcons;
