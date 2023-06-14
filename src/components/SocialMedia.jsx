import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div data-tooltip-id="linkedin">
        <BsLinkedin></BsLinkedin>
        {/* <Tooltip
          id={"linkedin"}
          place="right"
          style={{ border: "1px solid red", color: "#000" }}
        >
          Go to My Linkedin Profile
        </Tooltip> */}
      </div>
      <div>
        <a
          data-tooltip-id="github"
          data-tooltip-content="Hello world!"
          href="javascript.void(0)"
        >
          <BsGithub></BsGithub>
        </a>
        {/* <Tooltip
          id={"github"}
          // place="right"
          style={{
            backgroundColor: "rgb(0, 255, 30)",
            color: "#222",
          }}
        ></Tooltip> */}
      </div>
    </div>
  );
};

export default SocialMedia;
