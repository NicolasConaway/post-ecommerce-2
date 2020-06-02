import React from 'react';
import './App.css';   
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './components/Pages/Home/Home.js';
import Products from './components/Pages/Products/Products.js';
import Contacts from './components/Pages/Contacts/Contacts.js';
import Donate from './components/Pages/Donate/Donate.js';
import Footer from './components/Footer/Footer.js';

class App extends React.Component {

  render() {
    return(
      <Router>
        <>
          <Header/>

          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/products" component={Products} /> 
            <Route path="/contacts" component={Contacts} /> 
            <Route path="/donate" component={Donate} />
          </Switch>  

          <Footer /> 
        </>
      </Router>
    )
  }
}

export default App;
