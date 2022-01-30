import { render, screen } from "@testing-library/react";

import App from "./App";
import Login from "./components/login/Login";
import renderWithRouter from "./__setupTest__/renderWithRouter";

const mockedRoute = jest.fn();

jest.mock("react-router-dom", () => {
  const originalRouterDom = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalRouterDom,
    useRoutes: () => mockedRoute,
  };
});

describe("Routed apps should", () => {
  test("render home page with header title 'Learn React Hooks'", () => {
    renderWithRouter(<App />);
    const linkElement = screen.getByText(/Learn React Hooks/i);

    expect(linkElement).toBeInTheDocument();
  });
  test("land on a bad page", () => {
    renderWithRouter(<App />, { route: "/bad-page" });
    const linkElement = screen.queryByTestId("heading");

    expect(linkElement).toBeDefined();
  });

  test("render the Login Component", () => {
    const route = "/login";
    renderWithRouter(<Login />, { route });
    const linkElement = screen.getByText(/Sign In To React Hooks Discord/i);

    expect(linkElement).toBeInTheDocument();
  });
});

// describe("App should", () => {
//   test("generate application snapshot", () => {
//     const { asFragment } = render(<App />);

//     expect(asFragment(<App />)).toMatchSnapshot();
//   });
// });
