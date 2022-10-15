import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage></LoginPage>
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes></HeroesRoutes>
            </PrivateRoute>
          }
        ></Route>

        {/* No dentro de PublicRoutes */}
        {/* <Route path="/*" element={<LoginPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/*" element={<HeroesRoutes />}></Route> */}
      </Routes>
    </>
  );
};
