import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/state";

export const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App addPost = {addPost} state={state}/>,
        document.getElementById('root')
    );
}

