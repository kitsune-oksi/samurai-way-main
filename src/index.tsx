import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";

const renderEntireTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch}/>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree)