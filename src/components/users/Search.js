import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const {
    searchUsers,
    showClear,
    clearUsers,
    setAlert,
  } = props;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const search = (e) => {
    e.preventDefault();

    if (text) {
      searchUsers(text);
      setText('');
    } else {
      setAlert('Please enter something', 'light');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={search}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <button type="submit" value="Search" className="btn btn-dark btn-block">Search</button>
      </form>
      { showClear && <button type="submit" className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
