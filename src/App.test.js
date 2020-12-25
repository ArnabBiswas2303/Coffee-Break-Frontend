import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getAllByText("Home");
  expect(linkElement[0]).toBeInTheDocument();
});
