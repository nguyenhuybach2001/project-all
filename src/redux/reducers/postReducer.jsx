import { FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR, } from "../actions/type"

const initialState = {
    loading: true,
    success: false,
    message: null,
    data: null,
    total_page: null,
    current_page:null,
    total_records:null,
    nameSearch:'%20',
    filter:'NEW',
}
function PostReducers(state = initialState, payload) {
    switch (payload.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data,
                total_page: payload.total_page,
                current_page:payload.current_page,
                total_records:payload.total_records,
                nameSearch:payload.nameSearch,
                filter:payload.filter,
            };
        case FETCH_POST_ERROR:
            return {
                ...state,
                loading: false,
                message: payload.message
            };

        default:
            return state;
    }
}

export default PostReducers;