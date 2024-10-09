'use client'
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import { useState } from "react";
// import _ from 'lodash'
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => {
    return <div>Loading...</div>
  },
})

export default function Home() {
  // const session = await getServerSession(authOptions)
  const [isVisible, setVisible] = useState(false)
  return (
    <main>
      {/* <h1>Welcome, {session && session.user!.name}!</h1> */}
      <ProductCard />
      <button onClick={async () => {
        const _ = (await import('lodash')).default
        const users = [
          {
            name: 'c'
          },
          {
            name: 'b'
          },
          {
            name: 'a'
          }
        ]
        const sortedUsr = _.orderBy(users, ['name'])
      }}>show</button>
      {
        isVisible && <HeavyComponent />

      }
    </main>
  );
}
