import React, {Component} from 'react'
import axios from 'axios';

class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event){
        this.setState({
            username: event.target.value
        })
    }
    handlePassword(event){
        this.setState({
            handlePassword: event.target.value
        })
    }

    registerUser(username, password){
        axios.post('/api/auth/register', {
            username: this.state.username,
            password: this.state.password 
        }).then(() => {
            this.registerUser()
            this.loginNewUser()
        })
    }

    loginNewUser(username, password) {
        axios.get('/api/auth/register').then((res) => {
            this.setState({
                username: res.data.username,
                password: res.data.password
            })
        })
    }



    render() {

        return (
            <div>
                <h5>Username:</h5>
                <input type="text" placeholder='username' onChange={this.handleUsername} />
                <h5>Password:</h5>
                <input type="password" placeholder='password' onChange={this.handlePassword} />
                <button onClick={() => this.loginNewUser}>Login</button>
                <button onClick={() => this.registerUser}>Register</button>
            </div>
        )
    }
}

export default Auth;