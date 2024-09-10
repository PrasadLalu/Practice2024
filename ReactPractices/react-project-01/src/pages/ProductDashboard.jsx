import UserContext from '../context/ProductContext';
import { Product } from './Product';

export const ProductDashboard = () => {
    const products = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile" },
      { id: 3, name: "Bike" },
    ];
    return (
        <UserContext.Provider value={{products}}>
            <Product />
        </UserContext.Provider>
    );
}
