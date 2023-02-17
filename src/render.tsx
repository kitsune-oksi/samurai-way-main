import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, newPostText, StateType} from "./redux/state";

export const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App addPost = {addPost} state={state} newPostText={newPostText}/>,
        document.getElementById('root')
    );
}

