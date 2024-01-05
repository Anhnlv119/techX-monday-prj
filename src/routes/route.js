import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import SignUpNew from "../pages/SignUpNew"
import Invitation from "../pages/Invitation"
import InvitationRadio from "../pages/InvitationRadio"
import InvitationCheckBox from "../pages/InvitationCheckBox"
import InvitationTest from "../pages/InvitationTest"
const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {
            return redirect('/users/sign_up_new')
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
            {
                path: 'invitation1',
                element: <InvitationRadio />
            },
            {
                path: 'invitationCheckBox',
                element: <InvitationCheckBox />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }

])

export default router