import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const newsData = data.data[0];
  // console.log(newsData);
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold mb-3">Dragon News</h1>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={newsData?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
                          <h2 className="card-title">{ newsData?.title }</h2>
                          <p>{ newsData?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${newsData?.category_id}`} className="btn btn-primary">Back To Category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNavbar />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
