/**
 * Import vendor modules
 */
import React, {Component} from 'react';

/**
* Github API url
* @type {String}
*/
const GITHUB_API = "https://api.github.com/search/users";

/**
 * Searchbar component class
 */
class SearchBar extends Component {
  /**
   * Searchbar constructor functions
   * @param  {Object} props constructor arguments
   */
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.state = {term: ''};
  }

  search() {
    let reqUrl = GITHUB_API + "?q=" + this.state.term;
    let githubRequest = new Request(reqUrl, {method: 'GET'});

    fetch(githubRequest)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
      this.props.searchResults(response);
      console.log("response", response);
    });
  }

  /**
   * render component
   * @return {HTML}
   */
  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({term: event.target.value})} />
        <button type={"button"} onClick={this.search}>Sumbit</button>
      </div>
    );
  }
}

export default SearchBar;
