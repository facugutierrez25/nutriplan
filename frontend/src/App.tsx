import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import PrivateRoute from './auth/PrivateRoute'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/* Rutas privadas van acá adentro de PrivateRoute */}
          <Route path="*" element={<PrivateRoute><Navigate to="/login" replace/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
