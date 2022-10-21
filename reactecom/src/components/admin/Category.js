import React from "react";

const Category = () => {
  return (
    <div className="container-fluid px-4">
        <h1>Categorías</h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="seo-tag-tab"
            data-bs-toggle="tab"
            data-bs-target="#seo-tags"
            type="button"
            role="tab"
            aria-controls="seo-tags"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          1
        </div>
        <div
          className="tab-pane fade"
          id="seo-tags"
          role="tabpanel"
          aria-labelledby="seo-tag-tab"
          tabIndex="0"
        >
          2
        </div>
      </div>
    </div>
  );
};

export default Category;
