import React from "react";

const Nav = () => {
    return (
        <div>
            <h1> Frontend - Forleven </h1>
            <header className="header-global">
                <nav id="menu">
                    <ul>
                        <li><a href="/"> Início </a></li>
                        <li><a href="/todos-get"> Teste 01 </a></li>
                        <li><a href="/lista-get"> Teste 02 </a></li>
                        <li><a href="/form-post"> Teste 03 </a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Nav;