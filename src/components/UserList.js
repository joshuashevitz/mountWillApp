import MainLayout from './MainLayout';
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Applicant = props => (
  <tr>
    <td>{props.users.username}</td>
    <td>{props.users.loanrequest}</td>
    <td>
      <Link to={"/edit/"+props.users._id}>Edit Application Info</Link> | <button href="#" onClick={() => { props.deleteUsers(props.users._id) }}>delete</button> | <Link to={"/charts/"+props.users._id}>Generate Risk Chart</Link>
    </td>
  </tr>
)



export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {chartData:{ 
        labels: ['Credit Score', 'Loan Request'],
    datasets:[
        {
            label: ['Credit Scores','Loan Requests'],
            data: [],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
        }
    ]}
}
    this.deleteUsers = this.deleteUsers.bind(this)

    this.state = {users: []};
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUsers(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  

  UsersList() {
    return this.state.users.map(currentusers => {
      return <Applicant users={currentusers} deleteUsers={this.deleteUsers} key={currentusers._id}/>;
    })
  }

  render() {
    return (
    <MainLayout>
      <div>
        <h3>Applicant Chart</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Loan Requested</th>
            </tr>
          </thead>
          <tbody>
            { this.UsersList() }
          </tbody>
        </table>
      </div>
    </MainLayout>
    )
  }
}
