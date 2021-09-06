// import { newsAPI } from "../api/api";

// const SET_COMMENTS = "SET_COMMENTS";
// // const LOADING_IS_FETCHING = "LOADING_IS_FETCHING";
// // const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

// let initialState = {
//     comments: [],
//     // isLoading: true,
//     // isFetching: true
// }

// const newsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_COMMENTS:
//             return {
//                 ...state, comments: action.comments
//             }
//         // case LOADING_IS_FETCHING:
//         //     return {
//         //         ...state, isLoading: action.isLoading
//         //     }
//         // case TOGGLE_IS_FETCHING:
//         //         return {
//         //             ...state, isFetching: action.isFetching
//         //         }
//         default: 
//             return state;
//     }
// }

// export const setComments = (comments) => ({type: SET_COMMENTS, comments});
// // export const loadingIsFetching = (isLoading) => ({type: LOADING_IS_FETCHING, isLoading});
// //export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

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

// export default newsReducer;