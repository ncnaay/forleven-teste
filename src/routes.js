import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Nav from "./Componentes/nav";
import Inicio from "./Componentes/inicio";
import ListaGet from "./Componentes/listaGet";
import TodosGet from "./Componentes/todosGet";
import FormPost from "./Componentes/formPost";

function Routes () {
    return (
        <BrowserRouter>
            <Nav/>
                <Route path="/" exact component={Inicio} />
                <Route path="/lista-get" component={ListaGet} />
                <Route path="/todos-get" component={TodosGet} />
                <Route path="/form-post" component={FormPost} />
        
        </BrowserRouter>
    );
};

export default Routes;

