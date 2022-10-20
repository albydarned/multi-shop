import ProductTile from './ProductTile';

const ProductList = (props) => {

    return (
        <div className={props.rowClasses}>
            {
                props.products.map((product) => {
                    return (
                        <ProductTile product={product} classes={props.productClasses} key={product.id} />
                    )
                })
            }
        </div>
    );
};

export default ProductList;

