import React from "react";
import Login from "../../Components/LoginPage/Login";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const component = render(<Login />);
  const headerEL = component.getByTestId("header");
  expect(headerEL.textContent).toBe("Sign In");
});

test("Two Input box should be present", () => {
  const component = render(<Login />);
  const inpEmail = component.getByTestId("emailInput");
  fireEvent.change(inpEmail, { target: { value: "new value" } });

  const passInput = component.getByTestId("passwordInput");
  fireEvent.change(passInput, { target: { value: "new value" } });
});
