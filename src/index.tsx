import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ReduxStoreType, store} from "./redux/redux-store";

const renderEntireTree = (state: ReduxStoreType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state)
})