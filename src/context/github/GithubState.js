import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GIHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_CLIENT_SECRET;
}


function GithubState(props) {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    async function searchUsers(text){
        setLoading();
    
        console.log('Pesquisando: ', text);
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}$client_secret=${githubClientSecret}`);

        console.log(res.data);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items,
        });
    };

    // Get User
    async function getUser(username) {
        setLoading();
        // console.log('Pesquisando: ', username);
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}$client_secret=${githubClientSecret}`);

        dispatch({
            type: GET_USER,
            payload: res.data,
        });

        // setAlert(null);
    };
    
    // Get Repos

    async function getRepos(username) {
        setLoading();
        // console.log('Pesquisando: ', username);
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}$client_secret=${githubClientSecret}`);
    
        dispatch({
            type: GET_REPOS,
            payload: res.data,
        });

    };

    // Clear Users
    function clearUsers() {

        dispatch({
            type: CLEAR_USERS,
        });
    };


    // Set Loading
    function setLoading() {
        return dispatch({ type: SET_LOADING });
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
}

export default GithubState;