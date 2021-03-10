import React from "react";
import imgwelcome from "../Imagens/imgwelcome.png";

function Inicio() {
    return (
        <div className="resultado"> 
        <h2> Seja bem-vindo ao meu teste de frontend! </h2> 
        <p> Clique em algum teste para visualizar o resultado das requisições. </p>
        
        <img src={imgwelcome} alt="bem-vindo"/>
        </div>

    );
};

export default Inicio;