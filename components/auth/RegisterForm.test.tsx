import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("RegisterForm", () => {
  test("renders the register form", () => {
    render(<RegisterForm />);

    expect(screen.getByText("WarehouseOS")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Full Name")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Email")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Password")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Confirm Password")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
  });
});