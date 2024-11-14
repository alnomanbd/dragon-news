import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((result) => result.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
          <h1 className="font-semibold mb-3">All Category ({ categories.length })</h1>
          <div className="flex flex-col gap-1">
              {
                  categories.map((category) => (
                    <NavLink
                      to={`/category/${category.category_id}`}
                        className="btn btn-base-100 border-none"
                        key={category.category_id}>{category.category_name}
                    </NavLink>
                  ))
              }
        </div>
      </div>
  );
};

export default LeftNavbar;
