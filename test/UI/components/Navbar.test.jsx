import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/UI";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en el componente en <Navbar>", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Ismael",
    },
    logout: jest.fn(),
  };

  test("debe de mostrar el nombre del usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar></Navbar>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ismael")).toBeTruthy();
  });

  test("debe de llamar el logout y navigate cuando se hace click en el botón", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Ismael",
      },
          logout: jest.fn(),
    };

    test("debe de mostrar el nombre del usuario", () => {
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter>
            <Navbar></Navbar>
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const logoutBtn = screen.getByRole("button");
      fireEvent.click(logoutBtn);

      expect(contextValue.logout).toHaveBeenCalled();
      expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
        replace: true,
      });
    });
  });
});
