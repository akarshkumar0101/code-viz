import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-apple fa-lg m-2" aria-hidden="true" />
        Code Graph
      </div>
    </nav>
  );
};

export default NavBar;
