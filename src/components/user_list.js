/**
 * Import vendor modules
 */
import React, {Component} from 'react';

/**
 * Import custom components
 */
import UserPreview from './user_preview';

/**
 * User list class
 */
class UserList extends Component {
  /**
   * constructor user list
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * render component
   * @return {JSX}
   */
  render() {
    let userPreview = [];

    this.props.users.forEach((user) => {
      userPreview.push(<UserPreview user={user} key={user.id} />);
    });

    return (
      <div>
        <ul>
          {userPreview}
        </ul>
      </div>
    );
  }
}

export default UserList;
