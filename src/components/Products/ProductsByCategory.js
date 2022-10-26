import { useContext } from 'react';
import ProductList from './ProductList';
import ProductContext from '../../store/product-context';

const ProductsByCategory = (props) => {

    const ctxProductContext = useContext(ProductContext);
    const products = ctxProductContext.getProductsByCategory(props.category);

    let words = props.category.replace("-", " ").split(" ");
    let categoryFormatted = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");

    return (
        <div className="col-lg-9 col-md-8">
            <h2>{ categoryFormatted }</h2>
            <ProductList products={products} rowClasses="row pb-3" productClasses="col-lg-4 col-md-6 col-sm-6 pb-1"/>
        </div>
    );
};

export default ProductsByCategory;

