import React, { Component } from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	      <Header />
	        { this.props.children }
	       <Footer />  
      </div>
    );
  }
}

export default App;
