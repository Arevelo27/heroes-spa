import { types } from "../../../src/auth";

describe('pruebas en "Types"', () => {

    test('debe de tener estos types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    });

})