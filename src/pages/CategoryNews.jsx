import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import LoadingSpinner from "../components/LoadingSpinner";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    const [loading, setLoading] = useState(true)
    console.log(news);
    useEffect(() => {
        if (news) {
            setLoading(false)
        }
    }, [news])
    
    if (loading) {
        return <LoadingSpinner/>
    }
    return <div>
        <h1 className="font-semibold mb-3">Dragon News Home</h1>
        <p className="text-gray-400 text-sm">{news.length} News found on this category.</p>
        <div>
            {
                news.map((singleNews) => (
                    <NewsCard key={singleNews._id} news={ singleNews} />
                ))
            }
        </div>
  </div>;
};

export default CategoryNews;
