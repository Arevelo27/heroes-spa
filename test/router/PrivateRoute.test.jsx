import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Andres'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']} future={{ v7_startTransition: true,  v7_relativeSplatPath: true }}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
    
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
    });
})
