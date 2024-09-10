import { useMutation, useQuery, useQueryClient } from "react-query";
import { addNewProduct, fetchProductsList } from "./api";
import { useState } from "react";

const ReactQueryExample = () => {
  const [productTitle, setProductTitle] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["productsList"],
    queryFn: () => fetchProductsList(),
    // queryFn: fetchProductsList,
  });

  const getQueryClient = useQueryClient();

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productsList"]);
    },
  });

  const handleAddNewProduct = async () => {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  };

  if (isLoading) return <h2>Products are loading...</h2>;

  return (
    <div>
      <h1>React Query Example</h1>
      <input
        name="name"
        value={productTitle}
        placeholder="Enter product title"
        onChange={(event) => setProductTitle(event.target.value)}
      />
      <button
        onClick={handleAddNewProduct}
        disabled={productTitle.trim() === ""}
      >
        Add Product
      </button>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
};

export default ReactQueryExample;
