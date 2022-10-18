import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";

describe("Pruebas en <PublicRoute/>", () => {
  test("debe de mostrar el children si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    /*   screen.debug(); */
    expect(screen.getByText("Ruta pública")).toBeTruthy();
  });
  test("debe de navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Isma",
        id: "1234",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            ></Route>
            <Route path="marvel" element={<h1>Página Marvel</h1>}></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    /* screen.debug(); */
    expect(screen.getByText("Página Marvel")).toBeTruthy();
  });
});
