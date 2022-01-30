import { render, screen } from "@testing-library/react";

import GroceryInput from "components/ui/input/GroceryInput";

describe("Should match", () => {
  test("snapshot", () => {
    const { container } = render(
      <GroceryInput type="text" label="Snapshot" name="test"></GroceryInput>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("Custom input should be able to render", () => {
  test("text input", () => {
    const { container, unmount } = render(<GroceryInput type={"text"} />);
    const inputElement = screen.getByTestId("generic-input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    unmount(container);
  });
  test("password input", () => {
    const { container, unmount } = render(<GroceryInput type={"password"} />);
    const inputElement = screen.getByTestId("generic-input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
    unmount(container);
  });
  test("number input", () => {
    const { container, unmount } = render(<GroceryInput type={"number"} />);
    const inputElement = screen.getByTestId("generic-input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "number");
    unmount(container);
  });
});
