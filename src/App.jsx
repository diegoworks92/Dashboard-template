import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";

// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";

// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Support from "./pages/admin/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        {/*         <Route path="/" element={<LayoutAuth />}>
        </Route> */}
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
