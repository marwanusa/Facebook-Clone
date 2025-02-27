import { RightSideBar, Sidebar } from "../../components";
import TimelineView from "../../components/common/TimelineView/TimelineView";
import styles from "./styles.module.css";

const HomeLayout = () => {
  const { container, sidebar, feed, rigthSidebar } = styles;
  return (
    <div className={container}>
      <div className={sidebar}>
        <Sidebar />
      </div>
      <div className={feed}>
        <TimelineView />
      </div>
      <div className={rigthSidebar}>
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomeLayout;