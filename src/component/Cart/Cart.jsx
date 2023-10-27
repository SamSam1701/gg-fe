import "./Cart.css";
const Cart = (props) => {

    const { totalPrice, cartItems, decreaseQuantity, increaseQuantity, deleteFromCart } = props;

    return (
        <div className="card">
            <div className="header-card">
                <div className="img-logo">
                    <img src={require('../../assets/nike.png')} alt="Nike Logo" />
                </div>
                <div className="title-header">
                    <h3 className="title-card">Your Cart</h3>
                    <h3 className="price-product">
                        ${totalPrice()}
                    </h3>
                </div>
            </div>

            {cartItems.length !== 0 ? (

                cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <div className="img-product" style={{ backgroundColor: `${item.color}` }}>
                            <img src={`${item.image}`} alt="product" />
                        </div>

                        <div className="item-info">
                            <h4 className="title-product-cart">
                                {item.name}
                            </h4>
                            <p className="price-cart-product">${item.price}</p>
                            <div className="count-cart">
                                <button className="minus" onClick={() => decreaseQuantity(item)}>
                                    <img src={require('../../assets/minus.png')} alt="minus" />
                                </button>
                                <span className="number-item">{item.quantity}</span>
                                <button className="plus" onClick={() => increaseQuantity(item)}>
                                    <img src={require('../../assets/plus.png')} alt="plus" />
                                </button>
                                <button className="delete-blt"><img src={require('../../assets/trash.png')} alt="delete" onClick={() => deleteFromCart(item)} /></button>
                            </div>
                        </div>

                    </div>
                ))

            ) : (
                <p className="empty-cart">Your cart is empty</p>
            )}
        </div>
    )
}

export default Cart;