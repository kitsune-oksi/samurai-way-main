import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, newPostText} from "./redux/state";

const renderEntireTree = () => {
    ReactDOM.render(
        <App addPost = {addPost} state={state} newPostText={newPostText}/>,
        document.getElementById('root')
    );
}

renderEntireTree()

subscribe(renderEntireTree)