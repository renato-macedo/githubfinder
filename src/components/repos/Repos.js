import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


const Repos = ({ repos }) => (
  repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
);

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Repos;
