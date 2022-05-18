// local imports
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

// routing
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default App;
