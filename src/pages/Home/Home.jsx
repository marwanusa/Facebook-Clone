import { RightSideBar, Sidebar } from "../../components";
import TimelineView from "../../components/common/TimelineView/TimelineView";
import styles from "./styles.module.css"
const Home = () => {
  const { container , leftSide,mainContent ,rightSide} = styles;
  return (
    <div className={container}>
      <div className={leftSide}>
        <Sidebar/>
      </div>
      <div className={mainContent}>
        <TimelineView/>
      </div>
    <div className={rightSide}>
      <RightSideBar/>
    </div>
    </div>
  )
}

export default Home