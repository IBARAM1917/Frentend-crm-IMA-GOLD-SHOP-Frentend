import { Button } from "flowbite-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="dropdown">
      <Button className="dropbtn" gradientDuoTone="cyanToBlue">FILTER</Button>
      <div className="dropdown-content">
        <a href="/jewellerys">Jewellerys</a>
        <a href="/bangles">Bangles</a>
        <a href="/earring">Earrings</a>
        <a href="/rings">Rings</a>
      </div>
    </div>
  );
};

export default Sidebar;