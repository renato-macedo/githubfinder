import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  search = (e) => {
    e.preventDefault();
    
    if (this.state.text) {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
    
    

  }

  render() {
    return (
      <form className="form" onSubmit={this.search}>
        <input 
        type="text" 
        name='text' 
        placeholder="Search Users..." 
        value={this.state.text}
        onChange={this.onChange}/>
        <button type="submit" value="Search" className="btn btn-dark btn-block">Search</button>
      </form>
    );
  }
}

export default Search;