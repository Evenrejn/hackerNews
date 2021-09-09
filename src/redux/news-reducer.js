import { newsAPI } from "../api/api";

const SET_NEWS = "SET_NEWS";
const TOGGLE_IS_FETCHING_NR = "TOGGLE_IS_FETCHING_NR";

let initialState = {
    news: [],
    isFetchingNR: true
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state, news: action.news
            }
        case TOGGLE_IS_FETCHING_NR:
                return {
                    ...state, isFetchingNR: action.isFetchingNR
                }
        default: 
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news});
export const toggleIsFetchingNR = (isFetchingNR) => ({type: TOGGLE_IS_FETCHING_NR, isFetchingNR});

export const getNews = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingNR(true));

        newsAPI.getNews().then((news) => {
            dispatch(setNews(news));
            dispatch(toggleIsFetchingNR(false));

        })

    }

}

export default newsReducer;