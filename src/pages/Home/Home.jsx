import { Sidebar } from "../../components";
import styles from "./styles.module.css"
const Home = () => {
  const { container , leftSide,mainContent ,rightSide} = styles;
  return (
    <div className={container}>
      <div className={leftSide}>
        <Sidebar/>
      </div>
      <div className={mainContent}>

      </div>
    <div className={rightSide}>

    </div>
    </div>
  )
}

export default Home