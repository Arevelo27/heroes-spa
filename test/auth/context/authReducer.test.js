import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {

    const initialState = { logged: false };

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);

    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Fernando',
                id: '123'
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {

        const action = {
            type: types.logout
        }

        const state = {
            logged: true,
            user: { id: '123', name: 'Carlos' }
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({
            logged: false
        });
    });
})
