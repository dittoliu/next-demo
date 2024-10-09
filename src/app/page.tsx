import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Welcome, {session && session.user!.name}!</h1>
      <ProductCard />
    </main>
  );
}
