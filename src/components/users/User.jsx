/* eslint-disable camelcase */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

import Spinner from '../layout/Spinner';

export default class User extends Component {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.func).isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    match: PropTypes.objectOf(PropTypes.func).isRequired,
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { match, getUser, getUserRepos } = this.props;
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }

  render() {
    const { user, loading, repos } = this.props;
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    } = user;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:
        {' '}
        {hireable ? <i className="fas fa-check text-success" />
          : <i className="fas fa-times-circle text-danger" /> }
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>
              Location:
              {` ${location}` // eu não sei usar eslint
              }
            </p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noopener noreferrer">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )
                }
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )
                }
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </Fragment>
                )
                }
              </li>

            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            <span>Followers: </span>
            {followers}
          </div>
          <div className="badge badge-success">
            <span>Following: </span>
            {following}
          </div>
          <div className="badge badge-light">
            <span>Public Repos: </span>
            {public_repos}
          </div>
          <div className="badge badge-dark">
            <span>Public Gists: </span>
            {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}
