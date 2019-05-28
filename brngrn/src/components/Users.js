import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Users extends Component {
  state = {
      users: [],
      newUser: {
          name: '',
          email: '',
          username:'',
          password:''
      },
      isUserFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/api/v1/users').then(res => {
        this.setState({users: res.data})
    })
  }

  toggleUserForm = () => {
      this.setState((state, props) => {
          return ({isUserFormDisplayed: !state.isUserFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewUser = {...this.state.newUser}
    cloneNewUser[e.target.name] = e.target.value
    this.setState({newUser: cloneNewUser})
  }

  createUser = (e) => {
    e.preventDefault()
    axios
        .post('/api/v1/users', {
            name: this.state.newUser.name,
            email: this.state.newUser.email,
            username: this.state.newUser.username,
            password: this.state.newUser.password
        })
        .then(res => {
            const usersList = [...this.state.users]
            usersList.unshift(res.data)
            this.setState({
                newUser: {
                    name: '',
                    email: '',
                    username: '',
                    password: ''
                },
                isUserFormDisplayed: false,
                users: usersList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {
            this.state.users.map(user => {
                return (
                    <div key={user._id}>
                        <Link
                            to={`users/${user._id}`}
                        >
                            {user.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggleUserForm}>+ New User</button>
        {
            this.state.isUserFormDisplayed
                ? <form onSubmit={this.createUser}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newUser.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <textarea
                            id="email"
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.newUser.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <textarea
                            id="username"
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.newUser.username}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <textarea
                            id="password"
                            type="text"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.newUser.password}
                        />
                    </div>
                    <button>Create</button>
                </form>
                : null
        }
      </div>
    )
  }
}

export default Users
