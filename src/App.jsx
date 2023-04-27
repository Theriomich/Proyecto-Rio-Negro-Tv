import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Content from "./Components/Content";
import ChannelsAdm from "./Components/ChannelsAdm";
import ProductionCenter from "./Components/ProductionCenter";
import TelevisionMobiles from "./Components/Televisionmobiles";
import Transmissions from "./Components/Transmissions";
import RightsManagement from "./Components/RightsManagement";
import CustomNavbar from "./Components/CustomNavbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/Content/", element: <Content /> },
    { path: "/Channels/", element: <ChannelsAdm /> },
    { path: "/Poduction_Center/", element: <ProductionCenter /> },
    { path: "/Television_Mobiles/", element: <TelevisionMobiles /> },
    { path: "/Transmissions/", element: <Transmissions /> },
    { path: "/Rights_Management/", element: <RightsManagement /> },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <CustomNavbar />
      </RouterProvider>
    </>
  );
}

export default App;
