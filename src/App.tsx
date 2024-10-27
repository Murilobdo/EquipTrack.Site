import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "@/features/login/LoginPage";
import { GetEquipmentsPage } from "@/features/equipments/GetEquipmentsPage";
import { ListEquipmentsPage } from "@/features/equipments/list/ListEquipmentsPage";
import { PublicLayout } from "@/layout/PublicLayout";
import { PrivateLayout } from "@/layout/PrivateLayout";
import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout component={<LoginPage />} />,
    },
    {
      path: '/get-equipments',
      element: <PrivateLayout component={<GetEquipmentsPage />} />,
    },
    {
      path: '/equipments',
      element: <PrivateLayout component={<ListEquipmentsPage />} />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
