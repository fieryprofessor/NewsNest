import React, { Component } from "react";
import "../Card.css"
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="news-card">
          <div className="news-source">
            <span>{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
                : imageUrl
            }
            className="news-img"
            alt="News"
          />
          <div className="news-content">
            <h5 className="news-title">{title}</h5>
            <p className="news-description">{description}</p>
            <p className="news-meta">
              <small>By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="news-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
