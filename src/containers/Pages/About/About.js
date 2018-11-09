import React from 'react';
import { Helmet } from 'react-helmet';

class About extends React.Component {
  head() {
    return (
      <Helmet>
        <title>React Boilerpalte | Aboutpage</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        <h1>About page</h1>
        <p>Some content</p>
      </div>
    );
  }
}

export default About;
