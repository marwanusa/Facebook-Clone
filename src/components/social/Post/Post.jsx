/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import PublicIcon from "../../../assets/Public_Icon.svg?react";
import ThreeDotsIcon from "../../../assets/ThreeDots_Icon.svg?react";
import XIcon from "../../../assets/X_Icon.svg?react";
import { useRef, useState } from "react";
import ReactsBar from "../reactsBar/ReactsBar";
import HiddenPost from "../hiddenPost/HiddenPost";

const Post = ({ post ,likeStatus}) => {
  const {
    container,
    profileinfo,
    info,
    contrtols,
    text,
    optionsBtn,
    CancelBtn,
    tooltipContainer,
    dot,
    content,
    postImg,
    PostStats,
    impressions,
    impressionsType,
    commentsSharesCount,
    postActions,
    shareBtn,
    sendBtn,
    commentBtn,

  } = styles;

  const tooltipTimeoutRef = useRef(null);
  const [state, setState] = useState({
    tooltip: { visible: false, text: "", x: 0, y: 0 },
  });



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
  const [isHidden, setIsHidden] = useState(false);
  const hidePost = () => {
      setIsHidden(true);
    };
  
    const undoHide = () => {
      setIsHidden(false);
    };
  


  return (
    <>
      {!isHidden ? (
        <div className={container}>
          <div className={info}>
            <div className={profileinfo}>
              <img src={post.user.profile_picture} className="rounded-circle" />
              <div className={text}>
                <h6 className="mb-0">{post.user.name}</h6>
                <div>
                  <small
                    onMouseEnter={(e) => showTooltip(e, post.created_at)}
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
              <div className={CancelBtn} onClick={hidePost}>
                <XIcon />
              </div>
            </div>
          </div>
          <div className={content}>
            {post.content.text && <p>{post.content.text}</p>}
            {post.content.media && (
              <img className={postImg} src={post.content.media[0].url} />
            )}
          </div>
          <div className={PostStats}>
            <div className={impressions}>
              <div className={impressionsType}>
              <img
                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                alt=""
              />
              <img
                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                alt=""
              />
              </div>
              <p>{post.likes_count}</p>
            </div>
            <div className={commentsSharesCount}>
              <p>{post.comments_count} comments</p>
              <p>{post.shares_count} shares</p>
            </div>
          </div>
          <div className={postActions}>
            <ReactsBar likeStatus={likeStatus} postId={post.id} />
            <span>
              <i className={commentBtn}> </i>
              <p>Comment</p>
            </span>
            <span>
              <i className={sendBtn}></i>
              <p>Send</p>
            </span>
            <span>
              <i className={shareBtn}></i>
              <p>Share</p>
            </span>
          </div>
        </div>
      ) : (
        <HiddenPost onUndo={undoHide} />
      )}

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
    </>
  );
};

export default Post;
