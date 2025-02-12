import SharePost from "../../social/SharePost/SharePost";
import styles from "./styles.module.css"
const TimelineView = () => {
    const {container} = styles;
  return (
    <div className={container}>
        <SharePost/>
    </div>
  )
}

export default TimelineView