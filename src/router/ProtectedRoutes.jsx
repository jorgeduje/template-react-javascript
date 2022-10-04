
import { Navigate,  Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {

  // Aca consumimos el token del localStorage por ejemplo
  // para poder darle acceso a nuestro Outlet solo a usuarios logeados
  const token = true
 
  if (!token) {
    // Si no tiene token, lo re-dirigimos al login automaticamente
    return <Navigate to="/login" />
  }

  return <Outlet />
  
};