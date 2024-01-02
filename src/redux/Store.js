import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../redux/Reducers'
// import thunk from 'redux-thunk'
// import devToolsEnhancer from 'remote-redux-devtools';
// import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(RootReducer,/*  applyMiddleware(thunk) */)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;