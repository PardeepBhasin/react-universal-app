import React from 'react';
import { Switch, Route } from 'react-router';

import './styles/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Pages/Home';
import About from './containers/Pages/About';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
