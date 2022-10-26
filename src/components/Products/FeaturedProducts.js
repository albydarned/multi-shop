import { useContext } from 'react';
import ProductList from './ProductList';
import ProductContext from '../../store/product-context';

const FeaturedProducts = () => {

    const ctxProductContext = useContext(ProductContext);
    const products = ctxProductContext.getFeaturedProducts(8);

    return (
        <ProductList products={products} rowClasses="row px-xl-1" productClasses="col-lg-3 col-md-4 col-sm-6 pb-1"/>
    );
};

export default FeaturedProducts;

