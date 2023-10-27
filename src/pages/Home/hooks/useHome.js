import { useEffect, useState } from "react";
import { getData } from "../../../api/data";

const useHome = () => {
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [productData, setProductData] = useState([]);

    // Thêm giỏ hàng vào Local Storage sau mỗi lần thay đổi
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const totalPrice = () => {
        const total = cartItems.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
        return total.toFixed(2);
    }

    // Fetching data từ api
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setProductData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    // Thêm sản phẩm vào cart
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            const updatedCart = cartItems.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    // Kiểm tra đã thêm vào cart chưa
    const isAddedToCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    }

    // Xóa product
    const deleteFromCart = (product) => {
        const updatedCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCart);
    }

    // Tăng số product item
    const decreaseQuantity = (product) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === product.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    }

    // Giảm số product item
    const increaseQuantity = (product) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    }

    return {
        cartItems,
        setCartItems,
        productData,
        setProductData,
        totalPrice,
        addToCart,
        isAddedToCart,
        deleteFromCart,
        decreaseQuantity,
        increaseQuantity,
    }
}

export default useHome;
