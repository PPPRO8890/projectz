import React from "react"
import { Route, Switch } from "react-router-dom"
import Ktb from "./Ktb"
import 'react-app-polyfill/stable'
import Logins from "./Logins"
export default function Main(){
    return(

    <Switch>
   <Route exact path="/" component={Logins}></Route>
   <Route  exact path="/dashboard" component={Ktb}></Route>
   </Switch>)

}