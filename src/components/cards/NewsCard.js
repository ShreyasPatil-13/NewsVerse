import React from "react";
import logo from "../assets/no-image.png";
import { BtnRead, BtnReadCopy } from "../utils/Icons";

const NewsCard = ({ news }) => {
  // Function to format the date and time
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="news-card">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            {news.urlToImage !== null ? (
              <img
                src={news.urlToImage}
                className="card-img"
                alt={news.title}
                style={imageStyle}
              />
            ) : (
              <img
                src={logo}
                className="card-img"
                alt={news.title}
                style={imageStyle}
                width={30}
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              {news.author && (
                <h6 className="card-subtitle mb-2 text-muted">{news.author}</h6>
              )}
              <p className="card-text">{news.description}</p>
              {news.source.name && (
                <p className="card-text">
                  <small className="text-muted">
                    Source: {news.source.name}
                  </small>
                </p>
              )}
              {news.publishedAt && (
                <p className="card-text">
                  <small className="text-muted">
                    Published: {formatDate(news.publishedAt)}
                  </small>
                </p>
              )}
              {news.url && (
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <div className="btn-read">
                    <span className="btn-read__icon-wrapper">
                      <BtnRead />
                      <BtnReadCopy />
                    </span>
                    Read more
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
