import React, { useState } from 'react';
import axios from 'axios';

export default function FormPost() {
    const url = "https://jsonplaceholder.typicode.com/posts/"
    const [data, setData,] = useState({
        userid: "",
        titulo: "",
        corpo: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            userid: parseInt(data.userid),
            titulo: data.titulo,
            corpo: data.corpo
        })

            .then(resposta => {
                console.log(resposta.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="resultado">
            <h2> Teste 03 </h2>
            <p> Fazer um formulário contendo as informações necessárias para fazer uma requisição POST </p>
            <form onSubmit={(e) => submit(e)}>

                <label> User ID </label>
                <input onChange={(e) => handle(e)} id="userid" value={data.userid} placeholder="userid" type="number" />

                <label> Titulo </label>
                <input onChange={(e) => handle(e)} id="titulo" value={data.titulo} placeholder="titulo" type="text" />

                <label> Corpo </label>
                <input onChange={(e) => handle(e)} id="corpo" value={data.corpo} placeholder="corpo" type="text" />

                <button> Submite </button>
            </form>
        </div>
    )

}