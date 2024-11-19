import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        {/* <LoginPage /> */}
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>

        </>
    )
}