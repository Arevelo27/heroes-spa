import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

jest.mock('query-string');

describe('Pruebas en <SearchPage />', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });
})
