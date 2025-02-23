import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import {Header} from '../../components'

const MainLayout = () => {
    const { container, wrapper,header} = styles
  return (
    <div className={container}>
      <div className={header}>
        <Header/>

      </div>

        <div className={wrapper}>
            <Outlet/>
        </div>

    </div>
  )
}

export default MainLayout