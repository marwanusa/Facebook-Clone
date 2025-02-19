/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import PublicIcon from "../../../assets/Public_Icon.svg?react";
import ThreeDotsIcon from "../../../assets/ThreeDots_Icon.svg?react";
import XIcon from "../../../assets/X_Icon.svg?react";
import { useRef, useState } from "react";

const Post = ({post}) => {
  const {
    container,
    profileinfo,
    info,
    contrtols,
    text,
    optionsBtn,
    CancelBtn,
    tooltipContainer,
    profileSamContainer,
    dot,
    content,
    postImg
  } = styles;

  const tooltipTimeoutRef = useRef(null);
  const profileSamTimeoutRef = useRef(null);
  const [state, setState] = useState({
    tooltip: { visible: false, text: "", x: 0, y: 0 },
    profileSam: { visible: false, x: 0, y: 0 },
  });

  // Function to update tooltip
  const showTooltip = (event, text) => {
    clearTimeout(tooltipTimeoutRef.current);
    const rect = event.target.getBoundingClientRect();
    setState((prevState) => ({
      ...prevState,
      tooltip: {
        visible: true,
        text,
        x: rect.left + window.scrollX - 20,
        y: rect.top + window.scrollY + 20,
      },
    }));
  };

  const hideTooltip = () => {
    tooltipTimeoutRef.current = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        tooltip: { ...prevState.tooltip, visible: false },
      }));
    }, 200);
  };

  const showProfileSam = (event) => {
    clearTimeout(profileSamTimeoutRef.current);
    const rect = event.target.getBoundingClientRect();
    setTimeout(()=>{
      setState((prevState) => ({
        ...prevState,
        profileSam: {
          visible: true,
          x: rect.left + window.scrollX - 80,
          y: rect.top + window.scrollY - 180,
        },
      }));
    },400)
  };

  const hideProfileSam = () => {
    profileSamTimeoutRef.current = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        profileSam: { ...prevState.profileSam, visible: false },
      }));
    }, 200);
  };

  return (
    <>
      <div className={container}>
        <div className={info}>
          <div className={profileinfo}>
            <img
              src={post.user.profile_picture}
              className="rounded-circle"
            />
            <div className={text}>
              <h6
                className="mb-0"
                onMouseEnter={showProfileSam}
                onMouseLeave={hideProfileSam}
              >
                {post.user.name}
              </h6>
              <div>
                <small
                  onMouseEnter={(e) =>
                    showTooltip(e, "This is a tooltip! gfdgdfgdfgdfgdfgdfgdfg")
                  }
                  onMouseLeave={hideTooltip}
                >
                  13 hours ago
                </small>

                <span className={dot}>.</span>
                <PublicIcon />
              </div>
            </div>
          </div>
          <div className={contrtols}>
            <div className={optionsBtn}>
              <ThreeDotsIcon />
            </div>
            <div className={CancelBtn}>
              <XIcon />
            </div>
          </div>
        </div>
        <div className={content}>
          {post.content.text && <p>{post.content.text}</p>}
          {post.content.media.type === "image" && <img src={content.media.url}/>}
          {/* {post.content.media && } */}
        </div>
      </div>
      {state.tooltip.visible && (
        <div
          className={tooltipContainer}
          style={{
            top: state.tooltip.y,
            left: state.tooltip.x,
          }}
        >
          {state.tooltip.text}
        </div>
      )}
      {state.profileSam.visible && (
        <div
          className={profileSamContainer}
          style={{
            top: state.profileSam.y,
            left: state.profileSam.x,
          }}
        ></div>
      )}
    </>
  );
};

export default Post;