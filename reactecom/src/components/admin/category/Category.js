import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const Category = () => {
  const [categoryInput, setCategoryInpput] = useState({
    slug: "",
    name: "",
    description: "",
    status: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setCategoryInpput({ ...categoryInput, [e.target.name]: e.target.value });
  };

  const submitCategory = (e) => {
    e.preventDefault();
    const data = {
      slug: categoryInput.slug,
      name: categoryInput.name,
      description: categoryInput.description,
      status: categoryInput.status,
      meta_title: categoryInput.meta_title,
      meta_description: categoryInput.meta_description,
      meta_keywords: categoryInput.meta_keywords,
    };

    axios.post("api/store-category", data).then((resp) => {
      if (resp.data.status === 200) {
        swal("Success", resp.data.msg, "success");
        document.getElementById("CATEGORY_FORM").reset();
      } else if (resp.data.status === 400) {
        setCategoryInpput({ ...categoryInput, error_list: resp.data.errors });
      }
    });
  };

  var display_errors = [];

  if (categoryInput.error_list) {
    display_errors = [
      categoryInput.error_list.slug,
      categoryInput.error_list.name,
      categoryInput.error_list.meta_title,
    ];
  }

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Categorías</h1>

      {display_errors.map((item) => {

        return(<p className="mb-1">{item}</p>)
      })}

      <form onSubmit={submitCategory} id="CATEGORY_FORM">
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
              SEO Tags
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane card-body border fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="form-group mb-3 px-4">
              <label>Slug</label>
              <input
                type="text"
                name="slug"
                onChange={handleInput}
                value={categoryInput.slug}
                className="form-control"
              ></input>
              <span>{categoryInput.error_list.slug}</span>
            </div>
            <div className="form-group mb-3 px-4">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={categoryInput.name}
                className="form-control"
              ></input>
              <span>{categoryInput.error_list.name}</span>
            </div>
            <div className="form-group mb-3 px-4">
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                onChange={handleInput}
                value={categoryInput.description}
              ></textarea>
            </div>
            <div className="form-group mb-3 px-4">
              <label>Status</label>
              <input
                type="checkbox"
                name="status"
                onChange={handleInput}
                value={categoryInput.status}
              ></input>
            </div>
          </div>
          <div
            className=" card-body border tab-pane fade"
            id="seo-tags"
            role="tabpanel"
            aria-labelledby="seo-tag-tab"
            tabIndex="0"
          >
            <div className="form-group mb-3 px-4">
              <label>Meta Title</label>
              <textarea
                type="text"
                name="meta_title"
                className="form-control"
                onChange={handleInput}
                value={categoryInput.meta_title}
              ></textarea>
              <span>{categoryInput.error_list.meta_title}</span>
            </div>
            <div className="form-group mb-3 px-4">
              <label>Meta Description</label>
              <textarea
                type="text"
                name="meta_description"
                className="form-control"
                onChange={handleInput}
                value={categoryInput.meta_description}
              ></textarea>
            </div>
            <div className="form-group mb-3 px-4">
              <label>Meta Keywords</label>
              <textarea
                type="text"
                name="meta_keywords"
                className="form-control"
                onChange={handleInput}
                value={categoryInput.meta_keywords}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary px- float-end">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Category;
