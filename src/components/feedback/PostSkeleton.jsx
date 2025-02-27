import ContentLoader from "react-content-loader";
const PostSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={600}
    viewBox="0 0 600 600"
      backgroundColor="#252728"
      foregroundColor="#dbdbdb"
    {...props}
  >
    <circle cx="40" cy="40" r="25" /> 
    
    <rect x="80" y="20" rx="5" ry="5" width="150" height="15" />
    <rect x="80" y="45" rx="5" ry="5" width="100" height="12" />
    
    <rect x="20" y="90" rx="5" ry="5" width="90%" height="15" />
    <rect x="20" y="120" rx="5" ry="5" width="85%" height="15" />
    <rect x="20" y="150" rx="5" ry="5" width="95%" height="15" />

    <rect x="20" y="180" rx="5" ry="5" width="90%" height="300" />
  </ContentLoader>
);


export default PostSkeleton;

