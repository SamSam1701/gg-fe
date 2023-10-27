import "./App.css";
import Product from "../../component/Product/Product";
import Cart from "../../component/Cart/Cart";
import useHome from "./hooks/useHome";

function App() {

  const { cartItems,
    productData,
    totalPrice,
    addToCart,
    isAddedToCart,
    deleteFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useHome();

  return (
    <div className="App">
      <div class="custom-shape-divider-bottom-1698337242">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
        </svg>
      </div>

      <Product
        productData={productData}
        addToCart={addToCart}
        isAddedToCart={isAddedToCart}
      />

      <Cart
        totalPrice={totalPrice}
        cartItems={cartItems}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default App;
