/**
 * Import vendor modules
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/**
 * Import custom components
 */
import SearchBar from './search_bar';
import UserList from './user_list';

/**
 * githubStartX class.
 */
class GithubStartX extends Component {
  constructor(props) {
    super(props);

    this.searchResults = this.searchResults.bind(this);
    this.state = {results: []};
  }

  searchResults(results) {
    this.setState({results: results.items});
    console.log("searchResults", this.state);
  }

  render() {
    return (
      <div>
        <SearchBar searchResults={this.searchResults} />
        <UserList users={this.state.results} />
      </div>
    );
  }
}

export default GithubStartX;
