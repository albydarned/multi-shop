import react, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = react.createContext({
    products: [],
    getCategories: () => {},
    getProductsByCategory: () => {},
    getFeaturedProducts: () => {},
    getProduct: () => {},
});

export const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        // Load the products from the window session
        let sessionCategoriesJSON = window.sessionStorage.getItem("products");
        // If the window products are not set, we need to load them
        if (sessionCategoriesJSON == null) {
            // Load products from the api
            loadProducts();
        
        // If the window products are set, parse the json and save to state
        } else {
            let sessionCategories = JSON.parse(sessionCategoriesJSON);
            setProducts(sessionCategories);
        }
    }

    //define a data retrieval function
    const loadProducts = async () => {
        console.log('load products');
        try {
            const result = await axios.get('https://dummyjson.com/products?limit=100');
            await setProducts(result.data.products);
            window.sessionStorage.setItem("products", JSON.stringify(result.data.products));
        } catch (error) {
            console.log(error);
        }
    }   

    const getCategories = () => {
        let newCategoryList = {};

        products.forEach((product) => {
            if (!(product.category in newCategoryList)) {
                newCategoryList[product.category] = {
                    name: product.category,
                    image: product.thumbnail,
                    count: 1
                }
            } else {
                newCategoryList[product.category].count++;
            }
        });

        return newCategoryList;
    }

    const getProductsByCategory = (category) => {
        return products.filter((product) => product.category == category);
    }

    const getFeaturedProducts = (numProducts) => {
        return products.slice(0, numProducts);
    }

    const getProduct = (productId) => {
        return products.find((product) => product.id.toString() == productId.toString());
    }

    return (
        <ProductContext.Provider value={{
            products: products,
            getCategories: getCategories,
            getProductsByCategory: getProductsByCategory,
            getFeaturedProducts: getFeaturedProducts,
            getProduct: getProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
    
}

export default ProductContext;