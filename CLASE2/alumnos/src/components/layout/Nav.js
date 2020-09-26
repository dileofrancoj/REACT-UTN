import React from "react";
// rfcp // rafc
const navItems = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/About",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {navItems.map((nav, index) => (
          <li key={nav.title + index}>
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
