import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Category = ({ activeCategory, handleCategoryChange }) => {
  const categories = [
    "General",
    "Business",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
    "Technology",
  ];

  return (
    <div>
      <div className="d-md-block">
        <div className="card d-md-none ">
          {" "}
          {/* Hide on md and larger screens */}
          <div
            className="card-header fw-medium fs-5"
            data-bs-toggle="collapse"
            data-bs-target="#categoryAccordion"
            role="button"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Category <IoIosArrowDropdownCircle />
          </div>
          <div
            className="collapse"
            id="categoryAccordion"
            style={{ maxHeight: "500px", overflowY: "auto" }}
          >
            <div className="card-body">
              <div className="list-group">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="/"
                    className={`list-group-item list-group-item-action ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryChange(category);
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card d-none d-md-block">
          {" "}
          {/* Hide on sm screens */}
          <div className="card-header fw-medium fs-5">Category</div>
          <div
            className="card-body"
            style={{ maxHeight: "500px", overflowY: "auto" }}
          >
            <div className="list-group">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="/"
                  className={`list-group-item list-group-item-action ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryChange(category);
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
