import React, { useState } from "react";

const CustomDrawer = () => {
  const [first, setFirst] = useState("hello");
  return <div>{first}</div>;
};

export default CustomDrawer;
