const ProductTile = (props) => {
    return (
        <div className={props.classes}>
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={props.product.thumbnail} alt="" />
                    <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="/"
                        ><i className="fa fa-shopping-cart"></i
                        ></a>
                        <a className="btn btn-outline-dark btn-square" href="/"
                        ><i className="far fa-heart"></i
                        ></a>
                        <a className="btn btn-outline-dark btn-square" href="/"
                        ><i className="fa fa-sync-alt"></i
                        ></a>
                        <a className="btn btn-outline-dark btn-square" href="/"
                        ><i className="fa fa-search"></i
                        ></a>
                    </div>
                </div>
                <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href={'/products/' + props.product.id}
                    >{ props.product.title }</a
                    >
                    <div
                        className="d-flex align-items-center justify-content-center mt-2"
                    >
                        <h5>${ props.product.price.toFixed(2).toLocaleString() }</h5>
                        <h6 className="text-muted ml-2"><del>${ (props.product.price / (1 - props.product.discountPercentage / 100)).toFixed(2).toLocaleString() }</del></h6>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-center mb-1"
                    >
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small>({props.product.rating})</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTile;

