import DownArrowIcon from "../../../assets/Down_Arrow.svg?react"
import { Button, Collapse } from 'react-bootstrap';
import Group from '../../social/group/Group';
import styles from './styles.module.css';
import { useState } from 'react';
const Sidebar = () => {
    const { container,upSide,downSide,showMoreBtn,seeMoreArrow } = styles;
    const [open, setOpen] = useState(false);

  return (
    < div className={container}>
        <div className={upSide}>
            <Group title="Marwan Usama" imgPosition="0"  customStyle="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1" imgSrc={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}/>
            <Group title="Friends" imgPosition="0 -333px"/>
            <Group title="Memories" imgPosition="0 -481px"/>
            <Group title="Saved" imgPosition="0 -185px"/>
            <Group title="Groups" imgPosition="0 -37px"/>
            <Group title="Video" imgPosition="0 -555px"/>
            <Group title="MarketPlace" imgPosition="0 -444px"/>
            <Group title="Play Games" imgPosition="0px -74px"/>
            {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="w-50 "
      >
        click
      </Button> */}
      <div className={showMoreBtn} onClick={() => setOpen(!open)}>
        <div className={seeMoreArrow}>
          <DownArrowIcon/>
        </div>
        <p>See More</p>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <Group title="MarketPlace" imgPosition="0 -444px"/>
        <Group title="Play Games" imgPosition="0px -74px"/>
        </div>
      </Collapse>
            </div>
        <div className={downSide}>

        </div>
    </div>
  )
}

export default Sidebar