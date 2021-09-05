import { newsAPI } from "../api/api";

const SET_NEWS = "SET_NEWS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    news: [],
    isFetching: true
}

const newsRedecer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state, news: action.news
            }
        case TOGGLE_IS_FETCHING:
                return {
                    ...state, isFetching: action.isFetching
                }
        default: 
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getNews = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        newsAPI.getNews().then((news) => {
            dispatch(setNews(news));
            dispatch(toggleIsFetching(false));

        })

    }

}

export default newsRedecer;