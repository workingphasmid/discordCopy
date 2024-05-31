import React from "react";
import Server from "./ServersSidebar/Server";
import resources from "../assets/resources";

const ServersSidebar = () => {
  return (
    <div>
      <Server visual={resources.icons.discordWhite} />
    </div>
  );
};

export default ServersSidebar;
