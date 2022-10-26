import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';

const ProductsByCategory = (props) => {

    //declare state variable to hold the list of categories    
    const [products, setProducts] = useState([]);

    //define a data retrieval function
    const getProducts = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/products/category/' + props.category);
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
        <div className="col-lg-9 col-md-8">
            <h2>{ props.category }</h2>
            <ProductList products={products} rowClasses="row pb-3" productClasses="col-lg-4 col-md-6 col-sm-6 pb-1"/>
        </div>
    );
};

export default ProductsByCategory;

