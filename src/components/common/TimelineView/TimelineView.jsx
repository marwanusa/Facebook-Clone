import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import Post from "../../social/Post/Post";
import SharePost from "../../social/SharePost/SharePost";
import { actGetPosts } from "../../../store/posts/postsSlice";
import PostSkeleton from "../../feedback/skeletons/postSkeleton";

const TimelineView = () => {
  const { container } = styles;
  const dispatch = useDispatch();
  const { records, status, page, hasMore } = useSelector(
    (state) => state.posts
  );
  const loaderRef = useRef(null);

  useEffect(() => {
    dispatch(actGetPosts(page)); 
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && status !== "pending" && hasMore) {
          dispatch(actGetPosts(page)); 
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [dispatch, page, status, hasMore]);

  return (
    <div className={container}>
      <SharePost />
      {records.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {status === "pending" &&
        [1, 2, 3].map((index) => <PostSkeleton key={index} />)}{" "}
      <div ref={loaderRef} style={{ height: "20px" }}></div>
    </div>
  );
};

export default TimelineView;
