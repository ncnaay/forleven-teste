import React from 'react';
import axios from 'axios';

export default class TodosGet extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
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
                    <h2> Teste 01 </h2>
                    <p> Fazer uma requisição de GET exibindo uma requisição de todos/1 </p>

                    <li> <strong> UserId: </strong> {this.state.users.userId} </li>
                    <li> <strong> Id: </strong> {this.state.users.id} </li>
                    <li> <strong> Title: </strong> {this.state.users.title} </li>

                </ul>
            </div>
        )
    }
}