/**
 * Import vendor modules
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/**
 * Import custom components
 */
import GithubStartX from './components/GithubStartX';

/**
 * Creates a new component.
 * It should produce some html
 * @return {HTML}
 */
const APP = () => {
  return (
    <div>
      <GithubStartX />
    </div>
  );
};

ReactDOM.render(<APP />, document.querySelector('.container'));
