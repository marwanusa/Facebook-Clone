import Post from "../../social/Post/Post";
import SharePost from "../../social/SharePost/SharePost";
import styles from "./styles.module.css"
const TimelineView = () => {
    const {container} = styles;
  return (
    <div className={container}>
        <SharePost/>
        <Post/>
    </div>
  )
}

export default TimelineView