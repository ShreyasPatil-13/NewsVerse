import React, { useEffect, useState } from "react";
import NewsCard from "./cards/NewsCard";
import Category from "./cards/Category";
import { useSearch } from "./contexts/SearchContext";
import WeatherCard from "./cards/WeatherCard";
import { ErrorMessage, Loader } from "./utils/Elements";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState("General");
  const { searchQuery, country } = useSearch();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch news

        let apiUrl = "";

        // Check if a search query is present
        if (searchQuery) {
          apiUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        } else {
          apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${activeCategory}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Filter out news with missing or removed information
        const filteredNews = data.articles.filter(
          (news) => news.title && news.url && news.title !== "[Removed]"
        );

        setNewsList(filteredNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(true);
      } finally {
        setLoading(false); // Set loading to false when news fetching is done
      }
    };

    fetchNews();
  }, [activeCategory, searchQuery, country]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-3 d-flex flex-column justify-content-between">
          <div className="mb-1">
            <Category
              activeCategory={activeCategory}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
          <div>
            <WeatherCard />
          </div>
        </div>

        <div
          className="col"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div className="card shadow-sm">
            {searchQuery !== "" ? (
              <div className="card-header fw-medium fs-4">
                Search result for - {searchQuery}
              </div>
            ) : (
              <div className="card-header fw-medium fs-4">{activeCategory}</div>
            )}
            {loading ? (
              <Loader />
            ) : (
              <>
                {error ? (
                  <ErrorMessage />
                ) : (
                  <>
                    <div className="card-body">
                      {newsList.map((news, index) => (
                        <NewsCard key={index} news={news} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
