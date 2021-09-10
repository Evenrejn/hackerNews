import { newsAPI } from "../api/api";

const SET_MORE_COMMENTS = "SET_MORE_COMMENTS";
const TOGGLE_IS_FETCHING_PCR = "TOGGLE_IS_FETCHING_PCR";

let initialState = {
    moreComments: [],
    isFetchingPCR: true
}

const parentCommentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MORE_COMMENTS:
            return {
                 ...state.moreComments, moreComments: [...state.moreComments, ...action.moreComments.map(el => {
                    return el
                })]                
            }
        case TOGGLE_IS_FETCHING_PCR:
                return {
                    ...state, isFetchingPCR: action.isFetchingPCR
                }
        default: 
            return state;
    }
}

export const setMoreComments = (moreComments) => ({type: SET_MORE_COMMENTS, moreComments});
export const toggleIsFetchingPCR = (isFetchingPCR) => ({type: TOGGLE_IS_FETCHING_PCR, isFetchingPCR});

export const getMoreComments = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingPCR(true));
            newsAPI.getMoreComments(id).then((moreComments) => {
                dispatch(setMoreComments(moreComments));
                dispatch(toggleIsFetchingPCR(false));
            }) 
    }
}

export default parentCommentsReducer;