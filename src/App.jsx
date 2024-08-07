import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/style.css";
import { useState, useEffect } from "react";

let arr = [];

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  arr = cartProducts;
  async function fetchProducts() {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let result = await data.json();
      setProducts(
        result.map((element) => {
          return { ...element, quantity: 0, isClicked: false };
        })
      );
    } catch (error) {
      setError(
        "An error occurred while loading the products. Please try again shortly."
      );
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  function handleIncrement(event) {
    changeProductQuantity(event.dataset.id, true, false);
  }

  function toggleQuantity(quantity, increment, decrement) {
    quantity =
      quantity < 10 && increment
        ? quantity + 1
        : quantity > 0 && decrement
        ? quantity - 1
        : quantity;
    return quantity;
  }

  function changeProductQuantity(value, isIncrement, isDecrement) {
    setProducts(
      products.map((element) => {
        if (element.id === Number(value)) {
          return {
            ...element,
            isClicked: false,
            quantity: toggleQuantity(
              element.quantity,
              isIncrement,
              isDecrement
            ),
          };
        } else {
          return element;
        }
      })
    );
  }
  function handleDecrement(event) {
    changeProductQuantity(event.dataset.id, false, true);
  }

  function handleChange(value, Id) {
    setProducts(
      products.map((el) => {
        if (el.id === Number(Id)) {
          return { ...el, quantity: value };
        } else {
          return el;
        }
      })
    );
  }

  function checkingProductQuantity(Id) {
    setProducts(
      products.map((element) => {
        if (element.id === Number(Id)) {
          return {
            ...element,
            isClicked: true,
          };
        } else {
          return element;
        }
      })
    );
  }

  function addProductInCart(Id) {
    products.forEach((product) => {
      if (product.id === Number(Id) && product.quantity !== 0) {
        product.isClicked = false;
        arr.push(product);
      } else if (product.id === Number(Id) && product.quantity === 0) {
        checkingProductQuantity(Id);
      }
    });

    arr = arr.reduce((acc, curr) => {
      const index = acc.findIndex((el) => el.id === curr.id);
      if (index === -1) {
        acc.push(curr);
      } else {
        if (acc[index].quantity < curr.quantity) {
          acc[index] = curr;
        }
      }

      return acc;
    }, []);

    setCartProducts(arr);
    setItemCount(arr.length);
  }

  function deleteCartItem(Id) {
    const arr = cartProducts.filter((item) => {
      return item.id !== Number(Id);
    });
    setCartProducts(arr);
    setItemCount(arr.length);
  }

  const router = createBrowserRouter(
    routes(
      error,
      products,
      cartProducts,
      itemCount,
      handleChange,
      handleDecrement,
      handleIncrement,
      addProductInCart,
      deleteCartItem
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
