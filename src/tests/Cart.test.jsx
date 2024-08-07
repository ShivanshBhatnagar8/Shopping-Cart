import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart/Cart";

describe("Cart Component", () => {
  it("render Cart Component when there is no cart products", () => {
    const cartProducts = [];

    render(
      <BrowserRouter>
        <Cart cartProducts={cartProducts} />
      </BrowserRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch(
      /No item in the cart. Browse our products and add your favorites!/
    );
  });
});

describe("Cart Component", () => {
  it("render Cart Component when there is no cart products", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "1",
        isClicked: true,
        img: "https://via.placeholder.com/150",
      },
    ];

    render(
      <BrowserRouter>
        <Cart cartProducts={cartProducts} />
      </BrowserRouter>
    );
    const price = /10/i;

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
describe("Cart Component", () => {
  it("testing delete functionality", () => {
    const cartProducts = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "1",
        isClicked: true,
        img: "https://via.placeholder.com/150",
      },
    ];

    render(
      <BrowserRouter>
        <Cart cartProducts={cartProducts} />
      </BrowserRouter>
    );
    const price = /10/i;

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();

    function mockDeleteCartProduct() {
      return cartProducts.filter((el) => {
        el.id !== 1;
      });
    }

    const list = mockDeleteCartProduct();

    render(
      <BrowserRouter>
        <Cart cartProducts={list} />
      </BrowserRouter>
    );

    expect(screen.queryByText("Product 1")).not.toBeNull();
    expect(screen.queryByText(price)).not.toBeNull();
    expect(screen.queryByText("Delete")).not.toBeNull();
    expect(screen.queryByRole("img")).not.toBeNull();
  });
});
