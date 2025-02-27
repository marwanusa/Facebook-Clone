import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
const HiddenPost = ({ onUndo }) => {
  const { container, undoButton, firstBox, hiddenInfo, secondBox, thirdBox, fourthBox } = styles;

  return (
    <div className={container}>
      <div className={firstBox}>
        <div className={hiddenInfo}>
          <img alt="" src="https://static.xx.fbcdn.net/rsrc.php/v4/yL/r/AS0wO6lZErj.png" />
          <article>
            <h6>Hidden</h6>
            <p>Hiding posts helps Facebook personalize your Feed. </p>
          </article>
        </div>
        <button className={undoButton} onClick={onUndo}>Undo</button>
      </div>
      <div className={secondBox}>
        <img alt="" src="https://static.xx.fbcdn.net/rsrc.php/v4/yE/r/mp_faH0qhrY.png" />
        <article>
          <h6>Snooze mohamed for 30 days</h6>
          <p>Temporarily stop seeing posts.</p>
        </article>
      </div>
      <div className={thirdBox}>
        <img alt="" src="https://static.xx.fbcdn.net/rsrc.php/v4/ye/r/gvDUvwYrlpP.png" />
        <article>
          <h6>Report post</h6>
          <p>We won't let Hustle Mind know who reported this.</p>
        </article>
      </div>
      <div className={fourthBox}>
        <img alt="" src="https://static.xx.fbcdn.net/rsrc.php/v4/yS/r/c9DAzIVshuY.png" />
        <article>
          <h6>Content preferences</h6>
        </article>
      </div>
    </div>
  );
};

export default HiddenPost;