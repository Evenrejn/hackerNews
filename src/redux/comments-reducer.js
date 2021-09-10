import { newsAPI } from "../api/api";

const SET_COMMENTS = "SET_COMMENTS";
const TOGGLE_IS_FETCHING_CR = "TOGGLE_IS_FETCHING_CR";

let initialState = {
    comment: [],
    isFetchingCR: true
}

const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_COMMENTS:
                return {
                    ...state, comment: [...action.comment ]
                } 

        case TOGGLE_IS_FETCHING_CR:
                return {
                    ...state, isFetchingCR: action.isFetchingCR
                }
        default: 
            return state;
    }
}

export const setComments = (comment) => ({type: SET_COMMENTS, comment});
export const toggleIsFetchingCR = (isFetchingCR) => ({type: TOGGLE_IS_FETCHING_CR, isFetchingCR});

export const getComments = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingCR(true));
            newsAPI.getComments(id).then((comment) => {
                dispatch(setComments(comment));
                dispatch(toggleIsFetchingCR(false));
            }) 
    }
}

export default commentsReducer;