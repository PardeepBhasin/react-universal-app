import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
const colors = [
  'red',
  'green',
  'aqua',
  'Lime',
  'grey',
  'blue',
  'orangered',
  'coral',
  'DeepPink',
  'Crimson',
  'Chocolate',
  'Maroon',
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: 'black',
    };
  }
  head() {
    return (
      <Helmet>
        <title>React Boilerpalte | Homepage</title>
      </Helmet>
    );
  }
  changeColor() {
    this.setState({
      selectedColor: colors.random(),
    });
  }
  clientSideMethod() {
    this.setState({
      selectedColor: colors.random(),
    });
  }
  componentDidMount() {
    this.clientSideMethod();
  }
  render() {
    return (
      <div>
        {this.head()}
        <h1>Homepage</h1>
        <p>Some content</p>
        <button
          style={{ backgroundColor: this.state.selectedColor }}
          onClick={() => this.changeColor()}
        >
          Change my color
        </button>
      </div>
    );
  }
}

export default Home;
