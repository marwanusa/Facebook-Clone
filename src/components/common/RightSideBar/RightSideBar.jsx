import styles from "./styles.module.css";
import SearchIcon from "../../../assets/Search_Bar.svg?react";
import OptionsIcon from "../../../assets/Options_Icon.svg?react";
import Group from "../../social/group/Group";

const RightSideBar = () => {
    const { container, contacts, groupChats, options,avatarImage } = styles;
    const names = [
        "Liam Bennett", "Sophia Reynolds", "Ethan Mitchell", "Ava Richardson",
        "Noah Parker", "Emma Sullivan", "Lucas Adams", "Mia Foster",
        "Benjamin Carter", "Olivia Hayes"
      ];
      
      const images = [
        "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/20.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/7.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/12.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/16.webp",
        "https://mdbcdn.b-cdn.net/img/new/avatars/19.webp"
      ];
      const groupNames = [
        "Tech Enthusiasts", "Book Club","Startup Innovators"
      ];
      
      const groupImages = [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=30&w=500",
        "https://images.unsplash.com/photo-1524779709304-40b5a3560c60?q=30&w=500",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=30&w=500"
      ];
     
  return (
    <div className={container}>
      <div className={contacts}>
        <span>Contacts</span>
        <div className={options}>
          <div>
            <SearchIcon width="15" height="15" />
          </div>
          <div>
            <OptionsIcon width="20" height="20" />
          </div>
        </div>
      </div>
      {names.map((name, index) => (
        <div key={index} className={avatarImage}> 
            <Group title={name}  imgPosition="0" imgSrc={images[index]} />
        </div>
    ))}

      <div className={groupChats}>
      <span>Group chats</span>
      {groupNames.map((name, index) => (
        <div key={index} className={avatarImage}> 
            <Group title={name}  imgPosition="0" imgSrc={groupImages[index]} />
        </div>
    ))}
      </div>
    </div>
  );
};

export default RightSideBar;
