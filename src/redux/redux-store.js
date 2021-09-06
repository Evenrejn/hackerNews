import {applyMiddleware, combineReducers, createStore} from  "redux";
import newsReducer from "./news-reducer";
import targetNewsReducer from "./target-news-reducer";
import thunkMiddleware from "redux-thunk";
import commentsReducer from "./comments-reducer";
import loadingReducer from "./loading-reducer";

let reducers = combineReducers({
    newsPage: newsReducer, 
    targetNewsPage: targetNewsReducer,
    commentsBlock: targetNewsReducer,
    // loading: loadingReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;