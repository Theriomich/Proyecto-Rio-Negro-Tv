import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Content from "./Components/Content";
import ChannelsAdm from "./Components/ChannelsAdm";
import ProductionCenter from "./Components/ProductionCenter";
import TelevisionMobiles from "./Components/Televisionmobiles";
import Transmissions from "./Components/Transmissions";
import RightsManagement from "./Components/RightsManagement";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/Content/", element: <Content /> },
    { path: "/Channels/", element: <ChannelsAdm /> },
    { path: "/Poduction Center/", element: <ProductionCenter /> },
    { path: "/Television Mobiles/", element: <TelevisionMobiles /> },
    { path: "/Transmissions/", element: <Transmissions /> },
    { path: "/Rights Management/", element: <RightsManagement /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
