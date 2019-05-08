import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}
const mapStateToProps = (state) => { 
<<<<<<< HEAD
  return {users: state.users}
}

=======
  return 
    { users: state.users }
}
>>>>>>> ea00ef66e266a297d17a5a8ac5eb3b9d5eefe7ec
export default connect(mapStateToProps)(App);

