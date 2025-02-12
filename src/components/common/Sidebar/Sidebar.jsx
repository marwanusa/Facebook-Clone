import DownArrowIcon from "../../../assets/Down_Arrow.svg?react";
import UpArrowIcon from "../../../assets/Up_Arrow.svg?react";
import Group from "../../social/group/Group";
import { Collapse } from "react-bootstrap";
import styles from "./styles.module.css";
import { useState } from "react";
const Sidebar = () => {
  const { container, upSide, downSide, showBtn, seeArrow,adIcon,footer } = styles;
  const [open, setOpen] = useState(false);
  const [openDownBar, setOpenDownBar] = useState(false);

  return (
    <div className={container}>
      <div className={upSide}>
        <Group
          title="Marwan Usama"
          imgPosition="0"
          customStyle="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1"
          imgSrc={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
        />
        <Group title="Friends" imgPosition="0 -333px" />
        <Group title="Memories" imgPosition="0 -481px" />
        <Group title="Saved" imgPosition="0 -185px" />
        <Group title="Groups" imgPosition="0 -37px" />
        <Group title="Video" imgPosition="0 -555px" />
        <Group title="MarketPlace" imgPosition="0 -444px" />
        <Group title="Play Games" imgPosition="0px -74px" />
        {!open && (
          <div className={showBtn} onClick={() => setOpen(!open)}>
            <div className={seeArrow}>
              <DownArrowIcon />
            </div>
            <h6>See More</h6>
          </div>
        )}

        <Collapse in={open}>
          <div id="example-collapse-text">
            <Group title="MarketPlace" imgPosition="0 -444px" />
            <Group title="Play Games" imgPosition="0px -74px" />
          </div>
        </Collapse>
        {open && (
          <div className={showBtn} onClick={() => setOpen(!open)}>
            <div className={seeArrow}>
              <UpArrowIcon />
            </div>
            <h6>See Less</h6>
          </div>
        )}
      </div>
      <div className={downSide}>
        <span>
          Your shortcuts
        </span>
        <Group title="Group1" imgPosition="0 -37px" />
        <Group title="Group2" imgPosition="0 -37px" />
        <Group title="Group3" imgPosition="0 -37px" />
        <Group title="Group4" imgPosition="0 -37px" />
        <Group title="Group5" imgPosition="0 -37px" />
        {!openDownBar && (
          <div className={showBtn} onClick={() => setOpenDownBar(!openDownBar)}>
            <div className={seeArrow}>
              <DownArrowIcon />
            </div>
            <h6>See More</h6>
          </div>
        )}

        <Collapse in={openDownBar}>
          <div id="example-collapse-text">
          <Group title="Group6" imgPosition="0 -37px" />
          <Group title="Group7" imgPosition="0 -37px" />
          </div>
        </Collapse>
        {openDownBar && (
          <div className={showBtn} onClick={() => setOpenDownBar(!openDownBar)}>
            <div className={seeArrow}>
              <UpArrowIcon />
            </div>
            <h6>See Less</h6>
          </div>
        )}

      </div>
    </div>
  );
};

export default Sidebar;
