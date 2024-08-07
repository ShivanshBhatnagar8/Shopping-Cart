import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navigation from "../components/Navigation/Navigation";

describe("Home component", () => {
  it("renders correct logo", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
describe("Home component", () => {
  it("renders correct home button", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const homeBtn = "Home";
    expect(screen.getByText(homeBtn)).toBeInTheDocument();
    expect(screen.getByText(homeBtn)).toHaveStyle({
      color: "rgb(255,255,255);",
    });
    userEvent.hover(screen.getByText(homeBtn));
    expect(screen.getByText(homeBtn)).toHaveStyle({
      color: "rgba(0,0,0);",
      backgroundColor: "rgb(255,255,255);",
    });
  });
});
describe("Home component", () => {
  it("renders correct product button", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const productBtn = "Products";
    expect(screen.getByText(productBtn)).toBeInTheDocument();
    expect(screen.getByText(productBtn)).toHaveStyle({
      color: "rgb(255,255,255);",
    });
    userEvent.hover(screen.getByText(productBtn));
    expect(screen.getByText(productBtn)).toHaveStyle({
      color: "rgba(0,0,0);",
      backgroundColor: "rgb(255,255,255);",
    });
  });
});
describe("Home component", () => {
  it("renders correct cart button", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    const cartBtn = "Cart";
    expect(screen.getByText(cartBtn)).toBeInTheDocument();
    expect(screen.getByText(cartBtn)).toHaveStyle({
      color: "rgb(255,255,255);",
    });
    userEvent.hover(screen.getByText(cartBtn));
    expect(screen.getByText(cartBtn)).toHaveStyle({
      color: "rgba(0,0,0);",
      backgroundColor: "rgb(255,255,255);",
    });
  });
});
