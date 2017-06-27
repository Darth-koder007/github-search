/**
 * Import vendor modules
 */
import React, {Component} from 'react';

/**
 * User preview class
 */
class UserPreview extends Component {
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

    return (
      <li>
        <span>{this.props.user.avatar_url}</span>
        <span>{this.props.user.login}</span>
      </li>
    );
  }
}

export default UserPreview;
