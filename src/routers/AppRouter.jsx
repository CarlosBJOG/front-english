import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/tutorial/HomeScreen"
import { AuthRouter } from "./AuthRouter"
import { DashBoardRoutes } from "./DashBoardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
    const isLoggedIn = true;

    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/*" element={
                        <PublicRoutes isAuth={isLoggedIn}>

                            <AuthRouter />

                        </PublicRoutes>
                    } />

                    <Route 
                        exact
                        path="*" 
                        element={
                        <PrivateRoutes isAuth={isLoggedIn}>

                            <DashBoardRoutes />

                        </PrivateRoutes>
                    } />


                </Routes>
            </BrowserRouter>

        </>
    )
}
