import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ReduxStoreType, store} from "./redux/redux-store";
import { Provider } from './StoreContext';

const renderEntireTree = (state: ReduxStoreType) => {
    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state)
})