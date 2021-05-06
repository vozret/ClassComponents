import React from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      showUsers: true.name,
      more: "Hi!",
    };
  }
  componentDidUpdate() {
    // try {

    // } catch (err) {
    //   // handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  // we have to make sure that "this" keyword inside our method reffers to the surrounding class
  toggleUsersHandler = () => {
    // "this" is now set to the same context or the same value
    // as the "this" keyword when we call toggleUserHandler method
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
