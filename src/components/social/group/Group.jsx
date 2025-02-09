import styles from "./styles.module.css";
const Group = ({ title, imgPosition,imgSrc,customStyle }) => {
  const { container, image,titleStyle } = styles;
  return (
    <div className={container}>
        {imgPosition !== "0" ?<i className={image} style={{backgroundPosition:imgPosition}}></i> : <img src={imgSrc} className={customStyle} alt="" />  }
      
      <h6 className={titleStyle}>{title}</h6>
    </div>
  );
};

export default Group;
