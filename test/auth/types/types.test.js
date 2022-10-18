import { types } from "../../../src/auth/types/types";

describe('test en "Types.js"', () => {
  test("debe de regresar estos types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
