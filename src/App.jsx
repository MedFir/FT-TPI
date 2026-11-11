import { Redirect, Route, Router, Switch } from 'wouter'
import './App.css'
import BodyEmpleado from './pages/empleado/Body/Body.jsx'
import BodyAdmin from './pages/admin/Body/Body.jsx'
import BodyCliente from './pages/cliente/Body/Body.jsx'
import BodyVendedor from './pages/vendedor/Body/Body.jsx'
import IniciarSesion from './pages/IniciarSesion/IniciarSesion.jsx'
import Registro from './pages/Registro/Registro.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <Redirect to="/cliente/inicio" replace />} />
        <Route path="/iniciar-sesion" component={IniciarSesion} />
        <Route path="/registro" component={Registro} />
        <Route path="/cliente" nest component={BodyCliente} />
        <Route path="/vendedor" nest component={BodyVendedor} />
        <Route path="/empleado" nest component={BodyEmpleado} />
        <Route path="/administrador" nest component={BodyAdmin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
