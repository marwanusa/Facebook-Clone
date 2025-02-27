import styles from "./styles.module.css";
// eslint-disable-next-line react/prop-types
const Group = ({ title, imgPosition,imgSrc,customStyle }) => {
  const { container,containerStyle, image,titleStyle } = styles;
  return (
    <div className={container } style={containerStyle}>
        {imgPosition !== "0" ?<i className={image} style={{backgroundPosition:imgPosition}}></i> : <img src={imgSrc} className={customStyle} alt="" />  }
      
      <h6 className={titleStyle}>{title}</h6>
    </div>
  );
};

export default Group;
