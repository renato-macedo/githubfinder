import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'

class App extends Component {
  state = {
    loading: false,
  }
  
  load = () => {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.setState({ loading: false })
      },1000)
    });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        { this.state.loading ? <h4>Loading...</h4> : 
        <div>
          <h1>Loaded</h1>
        <button onClick={this.load}>load</button>
        </div> 
      }
      </div>
    );
  }
}

export default App;