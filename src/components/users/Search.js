import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired, 
    setAlert: PropTypes.func.isRequired
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
    } else {
      this.props.setAlert('Please enter something', 'light');
    }
    

  }

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.search}>
          <input 
          type="text" 
          name='text' 
          placeholder="Search Users..." 
          value={this.state.text}
          onChange={this.onChange}/>
          <button type="submit" value="Search" className="btn btn-dark btn-block">Search</button>
        </form>
        { showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
        
      </div>
    );
  }
}

export default Search;