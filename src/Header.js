import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          type="text"
          placeholder="Search for artists ,Songs , or Playlists"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
