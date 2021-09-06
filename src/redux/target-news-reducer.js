import { newsAPI } from "../api/api";

const SET_TARGET_NEWS = "SET_TARGET_NEWS";
const SET_COMMENTS = "SET_COMMENTS";
// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    targetNews: [],
    comments: [],
    // isFetching: true
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARGET_NEWS:
            return {
                ...state, targetNews: action.targetNews
            }
        case SET_COMMENTS:
            return {
                ...state, comments: action.comments
            }
        // case TOGGLE_IS_FETCHING:
        //         return {
        //             ...state, isFetching: action.isFetching
        //         }
        default: 
            return state;
    }
}

export const setTargetNews = (targetNews) => ({type: SET_TARGET_NEWS, targetNews});
export const setComments = (comments) => ({type: SET_COMMENTS, comments});
//export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getTargetNews = (id) => {
    //debugger;
    return (dispatch) => {
        // dispatch(toggleIsFetching(true));

        newsAPI.getTargetNews(id).then((targetNews) => {
            dispatch(setTargetNews(targetNews));
            // dispatch(toggleIsFetching(false));

        })

    }

}

export const getComments = (id) => {
    //debugger;
    return (dispatch) => {
        // dispatch(toggleIsFetching(true));
        newsAPI.getComments(id).then((comments) => {
            dispatch(setComments(comments));
            // dispatch(toggleIsFetching(false));
        })
    }
}

export default newsReducer;