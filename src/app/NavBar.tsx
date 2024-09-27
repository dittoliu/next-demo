import Link from "next/link";
import React from "react";

const NavBar = () => (
  <>
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users Page</Link>
        </li>
        <li>
          <Link href="/products">Products Page</Link>
        </li>
        <li>
          <Link href="/admin">Admin Page</Link>
        </li>
      </ul>
    </div>
  </>
);

export default NavBar;
