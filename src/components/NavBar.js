import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((value, index) => {
    return <a href={`#${value}`} key={index}>{value}</a>
  })

  return <nav>{linkElements}</nav>


}

export default NavBar;
