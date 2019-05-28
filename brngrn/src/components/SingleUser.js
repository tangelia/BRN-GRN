
import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class SingleUser extends Component {
  state = {
      user: {
          name: '',
          email: '',
          username:'',
          password:''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/api/v1/${this.props.match.params.id}`).then(res => {
          this.setState({user: res.data})
      })
  }

  deleteUser = () => {
      console.log('dasdf');
      axios.delete(`/api/v1/${this.props.match.params.id}`).then(res => {
          this.setState({redirectToHome: true})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = (e) => {
      const cloneUser = {...this.state.user}
      cloneUser[e.target.name] = e.target.value
      this.setState({user: cloneUser})
  }

  updateUser = (e) => {
      e.preventDefault();
      axios
        .put(`/api/v1/${this.props.match.params.id}`, {
            name: this.state.user.name,
            email: this.state.user.email,
            username: this.state.user.username,
            password: this.state.user.password 
        })
        .then(res => {
            this.setState({user: res.data, isEditFormDisplayed: false})
        })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/" />)
    }

    return (
      <div>
        <Link to="/">Back to Home</Link>
        <h1>Single User</h1>
        <button onClick={this.toggleEditForm}>Edit</button>
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updateUser}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.user.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <textarea
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.user.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <textarea
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.user.username}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <textarea
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
                        />
                    </div>
                    <button>Update</button>
                </form>
                : <div>
                    <div>
                        Name: {this.state.user.name}
                    </div>
                    <div>
                        email: {this.state.user.email}
                    </div>
                    <div>
                        username: {this.state.user.username}
                    </div>
                    <div>
                        username: {this.state.user.password}
                    </div>
                    <button onClick={this.deleteUser}>Delete</button>
                </div>
        }
      </div>
    );
  }
}

export default SingleUser;