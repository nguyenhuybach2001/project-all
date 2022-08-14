import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { loadPosts } from "../redux/actions/postAction";

function Pagination1(props) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(loadPosts(e.selected + 1, props.name, props.filter));
  };
  return (
    <>
      <ReactPaginate
        onPageChange={handleClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={props.num}
        breakLabel="..."
        renderOnZeroPageCount={null}
        nextLabel=">"
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        initialPage={0}
      />
    </>
  );
}

Pagination1.propTypes = {
  num: PropTypes.number,
  name: PropTypes.string,
  filter: PropTypes.string,
  forcePage: PropTypes.number,
};

export default Pagination1;
