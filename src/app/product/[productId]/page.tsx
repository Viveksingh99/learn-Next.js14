export default function ProductsDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product PAGE Details{params.productId}</h1>;
}
