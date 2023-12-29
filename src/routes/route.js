import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import SignUpNew from "../pages/SignUpNew"
import Invitation from "../pages/Invitation"
const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {
            return redirect('/home')
        }
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/users/*',
        children: [
            {
                path: 'sign_up_new',
                element: <SignUpNew />
            },
            {
                path: 'invitation',
                element: <Invitation />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }

])

export default router