import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'
import {Header} from '../../components'

const MainLayout = () => {
    const { container, wrapper } = styles
  return (
    <div className={container}>
        <Header/>
        <div className={wrapper}>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout