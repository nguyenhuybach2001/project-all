import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/actions/postAction";
import FilterComponent from "./filter-component";
import ProjectItem from "./project-item";
import Pagination1 from "./pagination";

export default function Body() {
  const loading = useSelector((state) => state.posts.loading);
  const data = useSelector((state) => state.posts.data);
  const total_page = useSelector((state) => state.posts.total_page);
  const dispatch = useDispatch();
  const nameSearch = useSelector((state) => state.posts.nameSearch);
  const filter = useSelector((state) => state.posts.filter);

  useEffect(() => {
    dispatch(loadPosts(1, "%20", "NEW"));
  }, [dispatch]);

  // const pages = [...Array(total_page).keys()].map((num) => num + 1);
  // console.log(pages);
  return (
    <div className="l-content">
      <div className="container">
        <FilterComponent />
        <div className="c-box">
          <div className="c-box__title">
            <h2 className="c-box__title__name">
              <span className="is-small">Dự án</span>
              <br />
              <b>Nhiều người chơi</b>
            </h2>
          </div>
          <div className="c-box__content">
            <div className="c-project-grid">
              <ul>
                {loading &&
                  Array(12)
                    .fill()
                    .map((index) => <ProjectItem.Loading key={index} />)}
                {!loading &&
                  data.map((item) => (
                    <ProjectItem
                      thumbnail={item.thumbnail}
                      name={item.name}
                      full_name={item.created_by.full_name}
                      avatar={item.created_by.avatar}
                    />
                  ))}
              </ul>
            </div>
            <div className="b-page">
              <ul className="pagination justify-content-center">
                <Pagination1
                  num={total_page}
                  name={nameSearch}
                  filter={filter}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
