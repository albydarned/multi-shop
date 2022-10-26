import react, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = react.createContext({
    categories: []
});

export const ProductContextProvider = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
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