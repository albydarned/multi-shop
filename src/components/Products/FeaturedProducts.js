import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';

const FeaturedProducts = () => {

    //declare state variable to hold the list of categories    
    const [products, setProducts] = useState([]);

    //define a data retrieval function
    const getProducts = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/products?limit=8');
            setProducts(result.data.products);

        } catch (error) {
            console.log(error);
        }
    }   
    
    //call the function, this only renders once instead of going into a loop
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <ProductList products={products} rowClasses="row px-xl-1" productClasses="col-lg-3 col-md-4 col-sm-6 pb-1"/>
    );
};

export default FeaturedProducts;

