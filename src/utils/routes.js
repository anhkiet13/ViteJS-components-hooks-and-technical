import { ForgotPass, Login } from "../pages/login/index";
import { 
    FooterPage, 
    HeaderPage, 
    MenuPage, 
    HomePage, 
    CustomeHookPage,
    BasicCRUD,
    BasicUseConText
} from "../pages/main/index";


export const LoginRoutes = [
    {
        path: "/login",
        element: Login
    },
    {
        path: "/forgot",
        element: ForgotPass
    }
];

export const MainRoutes = [
    {
        path: "/",
        element: HomePage
    },
    {
        path: "/header",
        element: HeaderPage
    },
    {
        path: "/menu",
        element: MenuPage
    },
    {
        path: "/footer",
        element: FooterPage
    },
    {
        path: "/custome-hooks",
        element: CustomeHookPage
    },
    {
        path: "/basic-useContext",
        element: BasicUseConText
    },
    {
        path: "/basic-crud",
        element: BasicCRUD
    }
];