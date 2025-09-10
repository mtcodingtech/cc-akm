import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="flex gap-6 bg-sky-600 justify-center text-white py-4">
        <li>
          <Link to={"/hooks"}>Hooks</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
