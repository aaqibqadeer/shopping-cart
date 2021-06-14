import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login.jsx";
import { Products } from "../pages/Products.jsx";
import { Register } from "../pages/Register";
import { Cart } from "../pages/Cart";

export function Routes() {

  const routes = [
    { label:"Home", path:"/", exact:true, component:Home},
    { label:"Products", path:"/products", exact:false, component:Products },
    { label:"About", path:"/about", exact:false, component:About },
    { label:"Login", path:"/login", exact:false, component:Login },
    { label:"Register", path:"/register", exact:false, component:Register },
    { label:"Cart", path:"/cart", exact:false, component:Cart },
  ]

  const routesList = routes.map(route => <Route key={route.label} exact={route.exact} path={route.path} component={route.component} />)
  
  return(
    <Switch>
      {routesList}
    </Switch>
  )
}