import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import LoginPage from "./LoginPage";

function renderLoginPage() {
  return render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
}

describe("LoginPage", () => {
  describe("rendering", () => {
    it("renders the PokéBinder logo", () => {
      renderLoginPage();
      expect(screen.getByAltText("PokéBinder")).toBeInTheDocument();
    });

    it("renders the email input with an accessible label", () => {
      renderLoginPage();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    });

    it("renders the password input with an accessible label", () => {
      renderLoginPage();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("renders the Sign In submit button", () => {
      renderLoginPage();
      expect(
        screen.getByRole("button", { name: /sign in/i })
      ).toBeInTheDocument();
    });

    it("renders the OR divider", () => {
      renderLoginPage();
      expect(screen.getByText("OR")).toBeInTheDocument();
    });

    it("renders the Continue with Google button", () => {
      renderLoginPage();
      expect(
        screen.getByRole("button", { name: /continue with google/i })
      ).toBeInTheDocument();
    });

    it("renders the Sign Up link pointing to /register", () => {
      renderLoginPage();
      const signUpLink = screen.getByRole("link", { name: /sign up/i });
      expect(signUpLink).toBeInTheDocument();
      expect(signUpLink).toHaveAttribute("href", "/register");
    });

    it("renders the 'Dont have an account?' prompt", () => {
      renderLoginPage();
      expect(screen.getByText(/dont have an account/i)).toBeInTheDocument();
    });
  });

  describe("form input behaviour", () => {
    it("email input is empty by default", () => {
      renderLoginPage();
      expect(screen.getByLabelText(/email address/i)).toHaveValue("");
    });

    it("password input is empty by default", () => {
      renderLoginPage();
      expect(screen.getByLabelText(/password/i)).toHaveValue("");
    });

    it("updates the email field when the user types", () => {
      renderLoginPage();
      const emailInput = screen.getByLabelText(/email address/i);
      fireEvent.change(emailInput, {
        target: { name: "email", value: "ash@pokemon.jp" },
      });
      expect(emailInput).toHaveValue("ash@pokemon.jp");
    });

    it("updates the password field when the user types", () => {
      renderLoginPage();
      const passwordInput = screen.getByLabelText(/password/i);
      fireEvent.change(passwordInput, {
        target: { name: "password", value: "pikachu123" },
      });
      expect(passwordInput).toHaveValue("pikachu123");
    });

    it("password input has type='password' to mask the value", () => {
      renderLoginPage();
      expect(screen.getByLabelText(/password/i)).toHaveAttribute(
        "type",
        "password"
      );
    });

    it("email input has type='email'", () => {
      renderLoginPage();
      expect(screen.getByLabelText(/email address/i)).toHaveAttribute(
        "type",
        "email"
      );
    });
  });

  describe("form submission", () => {
    it("does not throw or unmount on form submit", () => {
      renderLoginPage();
      const form = screen
        .getByRole("button", { name: /sign in/i })
        .closest("form")!;
      fireEvent.submit(form);
      expect(
        screen.getByRole("button", { name: /sign in/i })
      ).toBeInTheDocument();
    });
  });
});
