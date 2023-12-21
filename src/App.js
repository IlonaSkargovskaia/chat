import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {currentUser} = useContext(AuthContext);
  console.log("Curr user from App context: ", currentUser);

  //protected Route if we not authorised

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
        return <Navigate to = '/login' />
    }

    //if we have user - return home page
    return children
  }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
