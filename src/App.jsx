import './App.css';
import BodyEmpleado from './pages/empleado/Body/Body.jsx';
import BodyAdmin from './pages/admin/Body/Body.jsx';
import BodyCliente from './pages/cliente/Body/Body.jsx';
import BodyVendedor from './pages/vendedor/Body/Body.jsx';

import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

export default function App() {
  return (
    <>
      <h3>Empleado body:</h3>
      <BodyEmpleado />
      <h3>Admin body:</h3>
      <BodyAdmin />
      <h3>Cliente body:</h3>
      <BodyCliente />
      <h3>Vendedor body:</h3>
      <BodyVendedor />
    </>
  )
}
