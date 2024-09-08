import { create } from "zustand";


const productStore = create((set) => ({
    products: [],

    fetchProducts: async () => {
        const apiResponse = await fetch("https://dummyjson.com/products", { method: "GET" });
        const response = await apiResponse.json();
        set({
            products: response?.products
        });
    }
}));

export default productStore;
