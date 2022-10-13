import React from 'react';

class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        user: []
      };
    }
  
    componentDidMount() {
      fetch("localhost:8000/user")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              user: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, user } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {user.map(user => (
              <li key={user.id}>
                {user.name} {user.email} 
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default UserList;