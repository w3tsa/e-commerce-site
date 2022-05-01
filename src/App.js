// local imports
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";

// routing
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="sign-in" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
