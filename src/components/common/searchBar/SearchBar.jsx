import styles from './styles.module.css'
import Logo from "../../../assets/Search_Bar.svg?react";
const SearchBar = () => {
    const {inuptField,serach_bar,serach_bar_icon} = styles
  return (
    <div className={serach_bar}>
        <Logo className={serach_bar_icon} width="15" height="15" />
        <input className={inuptField} type="text" placeholder="Search Facebook"/>
    </div>
  )
}

export default SearchBar