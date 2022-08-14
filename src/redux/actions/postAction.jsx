import axios from "axios";
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from "../actions/type";

export const loadPosts = (page, name, filter) => async (dispatch) => {
  
  try {
    dispatch({ type: FETCH_POST_REQUEST });
    setTimeout(async ()=>{
      const res = await axios.get(
        `https://dev.api.codekitten.vn/api/v1/project/search?name=${name}&page=${page}&filter=${filter}`
      );
      const responseBody = res.data.data.data;
      const total_records = res.data.data.total_records;
      const total_page = res.data.data.total_page;
      const current_page = res.data.data.current_page;
      dispatch({
        type: FETCH_POST_SUCCESS,
        data: responseBody,
        total_page: total_page,
        total_records: total_records,
        current_page: current_page,
        nameSearch: name,
        filter: filter,
      });
    },1000)
   
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_POST_ERROR,
      message: error,
    });
  }
};

