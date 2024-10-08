'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession()
  return (
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
          {
            status === "unauthenticated" && (
              <li>
                <Link href="/api/auth/signin">Login</Link>
              </li>
            )
          }
          {
            status === "authenticated" && (
              <li>
                <Link href="/api/auth/signout">{session.user!.name}</Link>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
};

export default NavBar;
