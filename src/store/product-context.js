import react, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = react.createContext({
    categories: []
});

export const ProductContextProvider = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        // Load the categories from the window session
        let sessionCategoriesJSON = window.sessionStorage.getItem("categories");

        // If the window categories are not set, we need to load them
        if (sessionCategoriesJSON == null) {
            // Wait until the categories are loaded from the API
            await loadCategories();
            // Save the loaded categories to the window session
            window.sessionStorage.setItem("categories", JSON.stringify(categories));
        
        // If the window categories are set, parse the json and save to state
        } else {
            let sessionCategories = JSON.parse(sessionCategoriesJSON);
            setCategories(sessionCategories);
        }
    }

    const loadCategories = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/products?limit=100');
            let newCategoryList = {};

            result.data.products.forEach((product) => {
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
            
            setCategories(newCategoryList);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProductContext.Provider value={{
            categories: categories
        }}>
            {props.children}
        </ProductContext.Provider>
    )
    
}

export default ProductContext;