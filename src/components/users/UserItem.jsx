/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { avatar_url, login } }) => (
  <div className="card text-center">
    <img
      src={avatar_url}
      alt="avatar_url"
      className="round-img"
      style={{ width: '60px' }}
    />
    <h3>{login}</h3>
    <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1" rel="noopener noreferrer">
        More
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.objectOf.isRequired,
  // avatar_url: PropTypes.string,
  // login: PropTypes.string,
};

export default UserItem;
