import React, { Component } from 'react';

export default class Page extends Component {
  render(){
    return (
      <section className="main">
        <header className="title">
          <div className="logo">
          </div>
          <h1>Hello, I'm a quick start React App.</h1>
        </header>
        <div className="introduction">
          <p>
            You can build modern Javascript web application on me.
          </p>
        </div>
      </section>
    );
  }
};