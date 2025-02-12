import Group from "../group/Group";
import styles from "./styles.module.css";
const SharePost = () => {
  const { container, expressions, post, expression } = styles;
  return (
    <div className={container}>
      <div className={post}>
        <div className="rounded-circle">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            className="rounded-circle"
          />
        </div>
        <span>What's on your mind, Marwan?</span>
      </div>
      <div className={expressions}>
        <div className={expression}>
          
        </div>
        <div className={expression}>
        </div>
        <div className={expression}>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
