import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvaider from "./Contexts/AuthProvaider/AuthProvaider";
// import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvaider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}

            {/* <Route path="*" element={<NoMatch />} />
        </Route> */}
          </Routes>
        </BrowserRouter>
      </AuthProvaider>
    </div>
  );
}

export default App;
