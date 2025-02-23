import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css"
import { useEffect } from "react";
import Post from "../../social/Post/Post";
import SharePost from "../../social/SharePost/SharePost";
import { actGetPosts } from "../../../store/posts/postsSlice";
import PostSkeleton from "../../feedback/skeletons/postSkeleton";
const TimelineView = () => {
    const {container} = styles;
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(actGetPosts())
    },[])
  
  return (
    <div className={container}>
        <SharePost/>
        {posts.status === "pending" && [1, 2, 3].map((index) => <PostSkeleton key={index} />) }
        
        {
        posts.records && posts.records.map((post)=>{
          return (
            <Post key={post.id} post={post} />
          )
        })
      }

    </div>
  )
}

export default TimelineView