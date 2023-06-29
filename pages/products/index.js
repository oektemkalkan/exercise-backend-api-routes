import useSWR from "swr";
import Link from "next/link";

export default function AllListingPage() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Failed</h1>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
