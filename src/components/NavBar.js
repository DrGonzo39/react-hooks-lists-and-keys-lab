import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((link) => <a key={link} href={link}>{link}</a>)}</nav>;
}

export default NavBar;
