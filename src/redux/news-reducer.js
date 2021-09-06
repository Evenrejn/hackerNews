import { newsAPI } from "../api/api";

const SET_NEWS = "SET_NEWS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const LOADING_IS_FETCHING = "LOADING_IS_FETCHING";

let initialState = {
    news: [],
    // comments: [],
    isFetching: true,
    isLoading: true,
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state, news: action.news
            }
        // case SET_COMMENTS:
        //     return {
        //         ...state, comments: action.comments
        //     }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case LOADING_IS_FETCHING:
            return {
                ...state, isLoading: action.isLoading
            }
        default: 
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news});
// export const setComments = (comments) => ({type: SET_COMMENTS, comments});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const loadingIsFetching = (isLoading) => ({type: LOADING_IS_FETCHING, isLoading});

export const getNews = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(loadingIsFetching(true));
        await newsAPI.getNews().then((news) => {
            dispatch(setNews(news));
            dispatch(toggleIsFetching(false));
            dispatch(loadingIsFetching(false));

        })

    }

}

// export const getComments = (id) => {
//     //debugger;
//     return (dispatch) => {
//         // dispatch(toggleIsFetching(true));
//         newsAPI.getComments(id).then((comments) => {
//             dispatch(setComments(comments));
//             // dispatch(toggleIsFetching(false));
//         })
//     }
// }

export default newsReducer;