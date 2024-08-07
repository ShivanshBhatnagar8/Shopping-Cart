import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Navigation from "./components/Navigation/Navigation";
import Error from "./components/Error/Error";
const routes = (
  error,
  products,
  cartProducts,
  itemCount,
  handleChange,
  handleDecrement,
  handleIncrement,
  addProductInCart,
  deleteCartItem
) => [
  {
    element: <Navigation items={itemCount} />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: (
          <Products
            error={error}
            products={products}
            handleChange={handleChange}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            addProductInCart={addProductInCart}
          />
        ),
      },
      {
        path: "/cart",
        element: (
          <Cart cartProducts={cartProducts} deleteCartItem={deleteCartItem} />
        ),
      },
    ],
  },
];
export default routes;
