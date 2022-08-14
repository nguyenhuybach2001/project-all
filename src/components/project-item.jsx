import React from "react";
import PropTypes from "prop-types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function ProjectItem(props) {
  return (
    <li>
      <div class="c-project-item">
        <div class="c-project-item__thumb">
          <a href="project-detail.html">
            <img src={props.thumbnail} alt="project" />
          </a>
        </div>
        <div class="c-project-item__content">
          <div class="c-project-item__avatar">
            <img src={props.avatar} alt="avatar"></img>
          </div>
          <div class="c-project-item__row">
            <h3 class="c-project-item__title">
              <a href="project-detail.html">{props.name}</a>
            </h3>
            <span class="c-project-item__author">
              Bởi:
              <b> {props.full_name}</b>
            </span>
          </div>
          <div class="c-project-item__row">
            <a class="c-project-item__link" href="project-detail.html">
              Xem hướng dẫn
            </a>
            <a class="c-project-item__link" href="#">
              Chơi ngay
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

ProjectItem.propTypes = {
  thumbnail: PropTypes.string,
  avatar: PropTypes.string,
  full_name: PropTypes.string,
  name: PropTypes.string,
};
const Loading = () => {
  return (
    <li>
      <div class="c-project-item">
        <SkeletonTheme color="lightGray" width="100vw" height="100vh">
          <div class="c-project-item__thumb">
            <a href="project-detail.html">
              <Skeleton height={100} width={100} />
            </a>
          </div>
          <div class="c-project-item__content">
            <div class="c-project-item__avatar">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div class="c-project-item__row">
              <h3 class="c-project-item__title">
                <Skeleton  />
              </h3>
              <Skeleton containerClassName="c-project-item__author" />
            </div>
            <div class="c-project-item__row">
              <a class="c-project-item__link" href="project-detail.html">
                <Skeleton color="#5e6c77" highlightColor="#a9b7c1" />
              </a>
              <a class="c-project-item__link" href="project-detail.html">
                <Skeleton color="#5e6c77" highlightColor="#a9b7c1" />
              </a>
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </li>
  );
};
ProjectItem.Loading = Loading;

export default ProjectItem;
