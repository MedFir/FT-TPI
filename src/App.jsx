import { Redirect, Route, Router, Switch } from 'wouter'
import './App.css'
import BodyEmpleado from './pages/empleado/Body/Body.jsx'
import BodyAdmin from './pages/admin/Body/Body.jsx'
import BodyCliente from './pages/cliente/Body/Body.jsx'
import BodyVendedor from './pages/vendedor/Body/Body.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <Redirect to="/cliente/inicio" replace />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cliente" nest component={BodyCliente} />
        <Route path="/vendedor" nest component={BodyVendedor} />
        <Route path="/empleado" nest component={BodyEmpleado} />
        <Route path="/admin" nest component={BodyAdmin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
