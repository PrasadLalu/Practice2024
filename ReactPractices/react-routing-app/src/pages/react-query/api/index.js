const products = [
  { id: 11, title: "Annibale Colombo Bed" },
  { id: 12, title: "Annibale Colombo Sofa" },
  { id: 13, title: "Bedside Table African Cherry" },
  { id: 14, title: "Knoll Saarinen Executive Conference Chair" },
  { id: 15, title: "Wooden Bathroom Sink With Mirror" },
  { id: 16, title: "Apple" },
  { id: 17, title: "Beef Steak" },
  { id: 18, title: "Cat Food" },
  { id: 19, title: "Chicken Meat" },
  { id: 20, title: "Cooking Oil" },
];

export const fetchProductsList = async () => {
    await new Promise((resolve => setTimeout(resolve, 1000)));
    return products;
}

export const addNewProduct = async (productName) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newProduct = {
        id: Date.now(),
        title: productName,
    }
    products.push(newProduct);
    return newProduct;
}