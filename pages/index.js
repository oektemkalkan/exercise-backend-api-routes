import Link from "next/link";

export default function HomePage() {
  return (
    <>
    <div>
      <h1>Welcome to Next.js API Routes!</h1>
    </div>
    <Link href={"/products"}>product</Link>
    </>
  );
}
