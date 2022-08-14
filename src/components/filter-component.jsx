import ButtonComponent from "./button-component";
import OptionComponent from "./option-component";
import SearchComponent from "./search-component";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/actions/postAction";

export default function FilterComponent() {
  const dispatch = useDispatch();
  return (
    <div className="c-filter">
      <div className="c-filter__left">
        <div className="c-filter-btn">
          <ul>
            <ButtonComponent title={"Toàn bộ kiến thức"} onClick={() => {}} />
            <ButtonComponent
              title={"Dự án nhiều bình chọn"}
              onClick={() => {}}
            />
          </ul>
        </div>
      </div>
      <div className="c-filter__right">
        <ul>
          <li>
            <SearchComponent />
          </li>
          <li>
            <OptionComponent
              title="Lọc theo"
              option1="Mới nhất"
              option2="Nhiều lượt xem nhất"
              func2={() => {
                dispatch(loadPosts(1, "%20", "VIEWS"));
              }}
              func1={() => {
                dispatch(loadPosts(1, "%20", "NEW"));
              }}
            ></OptionComponent>
          </li>
        </ul>
      </div>
    </div>
  );
}
