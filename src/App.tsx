import { Routes, Route, Navigate } from "react-router"
import { HomePage } from "./pages/Home"
import { LoginPage } from "./pages/Login"
import { RegisterPage } from "./pages/Register"

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>
    </div>
  )
}


