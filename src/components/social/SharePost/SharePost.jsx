import styles from "./styles.module.css";
const SharePost = () => {
  const images = [
    "https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png",
    "https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png",
    "https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png",
  ];
  const expressionName = ["Live video","Photo/video","Feeling/activity"]
  const { container, expressions, post, expression, expressionImage } = styles;
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
        {images.map((image, idx) => (
          <div key={idx} className={expression}>
            <img className={expressionImage} src={image} alt="image" />
            <span>{expressionName[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharePost;
