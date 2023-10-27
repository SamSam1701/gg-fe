import "./Product.css";
const Product = (props) => {

    const { productData, addToCart, isAddedToCart } = props;

    return (
        <div className="card">
            <div className="header-card">
                <div className="img-logo">
                    <img src={require('../../assets/nike.png')} alt="Nike Logo" />
                </div>
                <h3 className="title-card">Our Products</h3>
            </div>
            {productData.map((item) => (
                <div key={item.id}>
                    <div className="product-item">
                        <div className="image-product" style={{ backgroundColor: `${item.color}` }}><img src={`${item.image}`} alt="product" /></div>
                        <h4 className="title-product">
                            {item.name}
                        </h4>
                        <span className="description-product">
                            <p>{item.description}</p>
                        </span>
                        <div className="price-product">
                            <span className="price-product">
                                <b>${item.price}</b>
                            </span>
                            {isAddedToCart(item.id) ? (
                                <button className="check-btn">
                                    <img src={require('../../assets/check.png')} alt="check" />
                                </button>
                            ) : (
                                <button className="add-btn" onClick={() => addToCart(item)}>
                                    <p>ADD TO CART</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;