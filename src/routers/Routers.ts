import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/equipments',
        element: <GetEquipmentsPage />,
    },
]);

export default routes;