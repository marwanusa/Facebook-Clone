import { ReactionBarSelector } from "@charkour/react-reactions"

const ReactsBar = () => {
  return (
    <> 
              {showReactions && (
            <div
              className={reactsBar}
              onMouseEnter={() => setShowReactions(true)}
              onMouseLeave={hideReactionsbar}
            >
              <ReactionBarSelector onSelect={handleReactionClick} />
            </div>
          )}
          <span
            onClick={setLike}
            onMouseEnter={showReactionsbar}
            onMouseLeave={hideReactionsbar}
          >
            {/* <i className={isLiked ? activeLikeBtn : likeBtn}> </i> */}
            <i className={isLiked ? reactions[selectedReaction] : likeBtn}> </i>
            <p>{selectedReaction ? selectedReaction : "Like"}</p>{" "}
            {/* عرض الإيموجي المختار */}
          </span>
    </>
  )
}

export default ReactsBar