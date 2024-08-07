import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "../components/Home/Home";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /Find Your Favorites, Shop with Ease/
    );
  });
});

describe("Home component", () => {
  it("renders correct span element", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const text =
      /Browse our curated collection of top products, enjoy effortless shopping, and benefit from speedy delivery. We make shopping simple and enjoyable./i;

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
describe("Home component", () => {
  it("renders correct get started  button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const getStartedBtn = "Get Started";
    screen.debug(screen.getByText(getStartedBtn));
    expect(screen.getByText(getStartedBtn)).toBeInTheDocument();
    expect(screen.getByText(getStartedBtn)).toHaveStyle({
      color: "rgb(255,255,255);",
      backgroundColor: "rgba(0,0,0,0);",
    });

    userEvent.hover(screen.getByText(getStartedBtn));

    expect(screen.getByText(getStartedBtn)).toHaveStyle({
      color: "rgba(0,0,0,0);",
      backgroundColor: "rgb(255,255,255);",
    });
  });
});
describe("Home component", () => {
  it("renders got to cart button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const cartBtn = "Go to Cart";

    expect(screen.getByText(cartBtn)).toBeInTheDocument();
    expect(screen.getByText(cartBtn)).toHaveStyle({
      color: "rgba(0,0,0,0);",
      backgroundColor: "rgb(255,255,255);",
    });
  });
});
describe("Home component", () => {
  it("renders correct image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

describe("Home component", () => {
  it("renders got to cart button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const cartBtn = "Go to Cart";

    expect(screen.getByText(cartBtn)).toBeInTheDocument();
    expect(screen.getByText(cartBtn)).toHaveStyle({
      color: "rgba(0,0,0,0);",
      backgroundColor: "rgb(255,255,255);",
    });
  });
});
