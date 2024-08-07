/* eslint-disable no-undef */
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Products from "../components/Products/Products";
import ProductCard from "../components/Products/ProductCard";

global.fetch = vi.fn();

function createFetchResponse(data, willFail) {
  return {
    json: () => {
      return new Promise((resolve, reject) => {
        if (willFail) {
          reject(data);
        } else {
          resolve(data);
        }
      });
    },
  };
}

describe("Product component", () => {
  it("show error", () => {
    const errorMessage =
      "An error occurred while loading the products. Please try again shortly";

    render(
      <BrowserRouter>
        <Products error={errorMessage} products={[]} />
      </BrowserRouter>
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("fetch correct data and returns it", () => {
    const productList = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "0",
        isClicked: false,
        img: "https://via.placeholder.com/150",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(productList));

    render(
      <BrowserRouter>
        <ProductCard products={productList} />
      </BrowserRouter>
    );

    const price = /10.00/i;

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
    expect(screen.getByDisplayValue("0")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("testing if quantity is zero and product was clicked, then show message", () => {
    const productList = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "0",
        isClicked: true,
        img: "https://via.placeholder.com/150",
      },
    ];

    render(
      <BrowserRouter>
        <ProductCard products={productList} />
      </BrowserRouter>
    );

    const message = "Select at least one item";

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("testing quantity change", () => {
    const productList = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "0",
        isClicked: false,
        img: "https://via.placeholder.com/150",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(productList));

    function mockHandleChange() {
      return productList.map((el) => {
        return { ...el, quantity: "1" };
      });
    }

    const list = mockHandleChange();

    render(
      <BrowserRouter>
        <ProductCard products={list} handleChange={mockHandleChange} />
      </BrowserRouter>
    );
    const input = "1";
    expect(screen.getByDisplayValue(input)).toBeInTheDocument();
  });

  it("testing quantity increment", () => {
    const productList = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "0",
        isClicked: false,
        img: "https://via.placeholder.com/150",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(productList));

    render(
      <BrowserRouter>
        <ProductCard products={productList} />
      </BrowserRouter>
    );
    const input = "0";
    expect(screen.getByDisplayValue(input)).toBeInTheDocument();

    function increaseQuantity(quantity) {
      quantity++;
      return quantity;
    }
    function mockQuantityIncrement() {
      return productList.map((el) => {
        return { ...el, quantity: increaseQuantity(el.quantity) };
      });
    }
    const list = mockQuantityIncrement();

    render(
      <BrowserRouter>
        <ProductCard products={list} onIncrement={mockQuantityIncrement} />
      </BrowserRouter>
    );

    const newInput = "1";
    expect(screen.getByDisplayValue(newInput)).toBeInTheDocument();
  });

  it("testing quantity decrement", () => {
    const productList = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "1",
        isClicked: false,
        img: "https://via.placeholder.com/150",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(productList));

    render(
      <BrowserRouter>
        <ProductCard products={productList} />
      </BrowserRouter>
    );
    const input = "1";
    expect(screen.getByDisplayValue(input)).toBeInTheDocument();

    function decreaseQuantity(quantity) {
      quantity--;
      return quantity;
    }
    function mockQuantityDecrement() {
      return productList.map((el) => {
        return { ...el, quantity: decreaseQuantity(el.quantity) };
      });
    }
    const list = mockQuantityDecrement();

    render(
      <BrowserRouter>
        <ProductCard products={list} onIncrement={mockQuantityDecrement} />
      </BrowserRouter>
    );

    const newInput = "0";
    expect(screen.getByDisplayValue(newInput)).toBeInTheDocument();
  });

  it("testing Add to cart button functionality", () => {
    const productList = [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        quantity: "1",
        isClicked: false,
        img: "https://via.placeholder.com/150",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(productList));

    function mockCartButtonFunctionality() {
      return productList.map((el) => {
        return { ...el };
      });
    }

    const cartProduct = mockCartButtonFunctionality();
    render(
      <BrowserRouter>
        <ProductCard
          products={productList}
          addCart={mockCartButtonFunctionality}
        />
      </BrowserRouter>
    );
    expect(productList).toEqual(cartProduct);
  });
});
