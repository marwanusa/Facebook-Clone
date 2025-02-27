/* eslint-disable react/prop-types */
import { ReactionBarSelector } from "@charkour/react-reactions";
import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { actToggleLike } from "../../../store/posts/actToggleLike/actToggleLike.js";

// استيراد الأيقونات
import Angry from "../../../assets/reacts/angry.svg?react";
import Happy from "../../../assets/reacts/Happy.svg?react";
import Love from "../../../assets/reacts/love.svg?react";
import Sad from "../../../assets/reacts/sad.svg?react";
import Surprise from "../../../assets/reacts/surprise.svg?react";

const ReactsBar = ({ postId }) => {
  const dispatch = useDispatch();
  const [showReactions, setShowReactions] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState("satisfaction");

  const { reactsBar, likeBtn, activeLikeBtn, yellowReact, redReact } = styles;
  
  const handleLike = () => {
    dispatch(actToggleLike({ postId, isLiked }));
    setIsLiked(!isLiked);
  
    if (!isLiked && selectedReaction !== "satisfaction") {
      setSelectedReaction("satisfaction");
    }
  };
  let reactionTimeout;
  const showReactionsbar = () => {
    clearTimeout(reactionTimeout);
    reactionTimeout = setTimeout(() => setShowReactions(true), 500);
  };

  const hideReactionsbar = () => {
    clearTimeout(reactionTimeout);
    reactionTimeout = setTimeout(() => setShowReactions(false), 1000);
  };


  
  const handleReactionClick = (key) => {
    if (isLiked) {
      setSelectedReaction(key);
    } else {
      setSelectedReaction(key);
      handleLike();
    }
  };


  const reactions = {
    love: <Love />,
    happy: <Happy />,
    surprise: <Surprise />,
    sad: <Sad />,
    angry: <Angry />,
  };

  const reactionColors = {
    sad: yellowReact,
    surprise: yellowReact,
    happy: yellowReact,
    angry: redReact,
    love: redReact,
  };



  return (
    <>
      {showReactions && (
        <div
          className={reactsBar}
          onMouseEnter={() => setShowReactions(true)}
          onMouseLeave={hideReactionsbar}
        >
          <ReactionBarSelector onSelect={handleReactionClick} />
        </div>
      )}

      <span
        onClick={handleLike}
        onMouseEnter={showReactionsbar}
        onMouseLeave={hideReactionsbar}
      >
        {selectedReaction === "satisfaction" ? (
          <i className={isLiked ? activeLikeBtn : likeBtn}></i>
        ) : isLiked ? reactions[selectedReaction] :<i className={isLiked ? activeLikeBtn : likeBtn}></i>         
        }
        <p className={isLiked ? reactionColors[selectedReaction] || activeLikeBtn :"" } >
          {isLiked? selectedReaction === "satisfaction" ? "Like" : selectedReaction : "Like" }
        </p>
      </span>
    </>
  );
};

export default ReactsBar;
