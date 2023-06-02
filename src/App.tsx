import { Route, Routes } from "react-router-dom"
import { lazy } from "react";

const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'));
const SignUp = lazy(() => import('./pages/SignUp'));

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>  
  )
}

export default App