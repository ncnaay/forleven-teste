import React from 'react';
import axios from 'axios';

export default class ListaGet extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(resposta => {
                console.log(resposta.data);
                const users = resposta.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <div className="resultado">
                <ul>
                    <h2> Teste 02 </h2>
                    <p> Fazer uma requisição de GET exibindo uma lista de ao menos 20 objetos do endpoint /posts </p>
                    {this.state.users.map(user =>
                        <li key={user.id}>
                            <strong>Id: </strong> {user.id}
                            <strong>Título: </strong> {user.title}
                        </li>)}

                </ul>
            </div>
        )
    }
}