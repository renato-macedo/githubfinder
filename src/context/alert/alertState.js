import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import GithubReducer from './alertReducer';


import {
    SET_ALERT,
    REMOVE_ALERT,
} from '../types';

function AlertState(props) {
    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    function setAlert(message, type) {
        dispatch({
            type: SET_ALERT,
            payload: { message, type }
        });

        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;