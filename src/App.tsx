import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "@/features/login/LoginPage";
import { EquipmentPage } from "@/features/equipments/EquipmentsPage";
import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/equipments',
      element: <EquipmentPage />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
