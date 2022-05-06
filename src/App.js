import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPlayer from "./pages/AddPlayer";
import UpdatePlayer from "./pages/UpdatePlayer";
import NavigationBar from "./layouts/NavigationBar";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Regiter" element={<Register />} />
        <Route path="/Add" element={<AddPlayer />} />
        <Route path="/Update/:id" element={<UpdatePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
