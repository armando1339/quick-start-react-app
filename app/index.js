import './style.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';

import Page from './components/Page.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <Page />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);