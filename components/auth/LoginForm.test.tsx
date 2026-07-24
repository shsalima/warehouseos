import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("LoginForm", () => {
  test("renders the login form", () => {
    render(<LoginForm />);

    expect(screen.getByText("WarehouseOS")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Email")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Password")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });
});