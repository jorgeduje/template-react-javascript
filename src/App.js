import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { ProtectedRoutes } from "./router/ProtectedRoutes";
import Home from "./components/pages/home";

const App = ()=>{
  return (
    <BrowserRouter>
    <Routes>
      {/* Aca van las rutas que no estan protegidas */}
      <Route path="/login" />
      <Route path="/register" />



      {/* RUTAS PROTEGIDAS */}
      <Route element={<ProtectedRoutes />}>

        {/* Aca van las rutas que si estan protegidas */}
          <Route path="/" element={ <Home /> } />

      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
