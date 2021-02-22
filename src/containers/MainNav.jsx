import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Dropdown, Form } from "react-bootstrap";
import CustomDropDown from "../components/Dropdown";

const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="d-flex grp-dropdown">
        <CustomDropDown label="Activity" />
        <span className="mx-2"></span>
        <CustomDropDown label="Tool Guide" />
      </div>
      <div className="d-flex vs238d">
        <div className="search-box mr-5">
          <SearchIcon />
          <Form.Control placeholder="Search" />
        </div>
        <div className="d-flex align-items-center profile">
          <NotificationsIcon />
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="d-flex align-items-center"
            >
              <Avatar>A</Avatar>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
