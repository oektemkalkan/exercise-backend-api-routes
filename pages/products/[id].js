import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Failed</h1>;
  }

  return (
    <>
      <p>ID: {id}</p>
      <h1>{data.name}</h1>
      <p>Description: {data.description}</p>
      <p>Price: {data.price}</p>
      <p>Currency: {data.currency}</p>
      <p>Category: {data.category}</p>
    </>
  );
}
