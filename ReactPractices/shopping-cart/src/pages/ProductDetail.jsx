import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export const ProductDetail = () => {
    const { productId } = useParams();
    const { productDetail, setProductDetail, cartItems, handleAddToCart } =
        useContext(ProductContext);
    
    async function fetchProductDetail() {
        try {
            const apiResponse = await fetch(
              `https://dummyjson.com/products/${productId}`,
              { method: "GET" }
            );
            const response = await apiResponse.json();
            if (response) {
                setProductDetail(response);
            }
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProductDetail();
    }, []);
    
    return (
      <div>
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="px-4 py-10 rounded-xl shadow-lg relative">
                <img
                  className="w-4/5 rounded object-cover"
                  src={productDetail?.thumbnail}
                  alt={productDetail?.title}
                />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                {productDetail?.images?.length
                  ? productDetail?.images.map((imageItem) => (
                      <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                        <img
                          src={imageItem}
                          className="w-24 cursor-pointer"
                          alt="Product secondary image"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#333333]">
                {productDetail?.title}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-xl font-bold">${productDetail?.price}</p>
              </div>
              <div>
                <button
                  disabled={
                    productDetail
                      ? cartItems.findIndex(
                          (item) => item.id === productDetail.id
                        ) > -1
                      : false
                  }
                  onClick={() => handleAddToCart(productDetail)}
                  className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
