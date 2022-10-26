import ProductTile from './ProductTile';
import ProductSidebar from './ProductSidebar';

const ProductList = (props) => {

    return (
        <div>
            <div>
                <ProductSidebar />
            </div>

            <div className={props.rowClasses}>
                {
                    props.products.map((product) => {
                        return (
                            <ProductTile product={product} classes={props.productClasses} key={product.id} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;

