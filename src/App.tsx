import { HashRouter as Router, useRoutes } from "react-router-dom";

import Layout from "./components/Layout";

import Back from "./views/back";
import Home from "./views/home";


const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "back",
          element: <Back></Back>,
        }
      ],
    },
  ]);

  return routes;
};

function App() {
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
}

export default App;
