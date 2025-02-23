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
  const groups = [
    { title: "Friends", imgPosition: "0 -333px" },
    { title: "Memories", imgPosition: "0 -481px" },
    { title: "Saved", imgPosition: "0 -185px" },
    { title: "Groups", imgPosition: "0 -37px" },
    { title: "Video", imgPosition: "0 -555px" },
    { title: "MarketPlace", imgPosition: "0 -444px" },
    { title: "Play Games", imgPosition: "0px -74px" },
  ];
  const shortcuts = [
    { title: "Art Lovers", imgSrc: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=30&w=500" },
    { title: "Fitness Freaks", imgSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=30&w=500" },
    { title: "Travel Buddies", imgSrc: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=30&w=500" },
    { title: "Foodies United", imgSrc: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=30&w=500" },
    { title: "Music Maniacs", imgSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=30&w=500" },
    { title: "Gamers Zone", imgSrc: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=30&w=500" },
    { title: "Nature Explorers", imgSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=30&w=500" },
  ];

  return (
    <div className={container}>
      <div className={upSide}>
        <Group
          title="Marwan Usama"
          imgPosition="0"
          customStyle="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1"
          imgSrc={"https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"}
        />
      {groups.map((group, index) => (
        <Group key={index} title={group.title} imgPosition={group.imgPosition} />
      ))}
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
      {shortcuts.map((shortcut, index) => (
        <Group key={`shortcut-${index}`} customStyle={"rounded-circle"}  imgPosition="0" title={shortcut.title} imgSrc={shortcut.imgSrc} />
      ))}
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
