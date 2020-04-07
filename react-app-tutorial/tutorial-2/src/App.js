import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pageNum: 1,
      totalPages: 0,
    };
  }

  componentDidMount() {
    this.changePage(this.state.pageNum);
  }

  changePage() {
    const url = `https://reqres.in/api/users?page=${this.state.pageNum}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          users: res.data,
          pageNum: res.page,
          totalPages: res.total_pages,
        })
      );
  }

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Users list:</h1>
        </div>
        <div className="users">
          {users.map((user) => (
            <div className="card">
              <img
                className="card-img-top"
                src={user.avatar}
                key={user.id}
                alt="User email avatar"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {user.first_name}
                  {user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-group" aria-label="Page navigation example">
          <button
            disabled={this.state.pageNum === 1 ? true : false}
            type="button"
            className="btn btn-secondary"
            onClick={() => this.changePage(this.state.pageNum - 1)}
          >
            Prev
          </button>
          <button type="button" className="btn btn-secondary">
            {this.state.pageNum}
          </button>
          <button
            disabled={
              this.state.pageNum >= this.state.totalPages ? true : false
            }
            type="button"
            className="btn btn-secondary"
            onClick={() => this.changePage(this.state.pageNum + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
