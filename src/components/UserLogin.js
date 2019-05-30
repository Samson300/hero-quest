import React from 'react';
import Axios from 'axios';
import qs from 'qs';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleChange(event) {
            this.setState({[event.target.name]: event.target.value});
        }
        
        async handleSubmit(event) {
            alert('A name was submitted: ' + this.state);
            event.preventDefault();
            const response = await Axios({
                method: 'post',
                url: '/check',
                data: qs.stringify(this.state),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log(response.data);
        }
        
        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Email:
                <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                Password:
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Login" />
            </form>
            );
        }
    }

    export default UserLogin;