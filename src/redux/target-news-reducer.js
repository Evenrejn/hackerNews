import { newsAPI } from "../api/api";

const SET_TARGET_NEWS = "SET_TARGET_NEWS";
const TOGGLE_IS_FETCHING_TNR = "TOGGLE_IS_FETCHING_TNR";

let initialState = {
    targetNews: [],
    isFetchingTNR: true
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARGET_NEWS:
            debugger;
            return {
                ...state, targetNews: action.targetNews
            }
        case TOGGLE_IS_FETCHING_TNR:
                return {
                    ...state, isFetchingTNR: action.isFetchingTNR
                }
        default: 
            return state;
    }
}

export const setTargetNews = (targetNews) => ({type: SET_TARGET_NEWS, targetNews});
export const toggleIsFetchingTNR = (isFetchingTNR) => ({type: TOGGLE_IS_FETCHING_TNR, isFetchingTNR});

export const getTargetNews = (id) => {
    debugger;
    return (dispatch) => {
        dispatch(toggleIsFetchingTNR(true));

        newsAPI.getTargetNews(id).then((targetNews) => {
            dispatch(setTargetNews(targetNews));
            dispatch(toggleIsFetchingTNR(false));

        })

    }

}

export default newsReducer;