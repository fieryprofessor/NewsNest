import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import "../Home.css";

const Home = (props) => {

    const capitalizeFirstLetter =  (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      useEffect(()=>{
        document.title = `NewsNest - ${capitalizeFirstLetter(props.category)}`
        // eslint-disable-next-line
      },[]);


  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to NewsNest</h1>
      <p className="home-subtitle">Stay Informed, Stay Ahead</p>
      <p className="home-description">
        Get the latest and most accurate news from around the world. With NewsNest, stay updated with real-time headlines from various categories, including politics, sports, entertainment, business, and more.  
      </p>

      <div className="home-features">
        <div className="feature-card">
          <h2>🌍 Global News</h2>
          <p>Breaking news from every corner of the world, updated in real-time.</p>
        </div>
        <div className="feature-card">
          <h2>📡 Live Updates</h2>
          <p>Stay ahead with instant updates and notifications on trending topics.</p>
        </div>
        <div className="feature-card">
          <h2>🔍 Category Selection</h2>
          <p>Customize your news feed with categories that matter to you.</p>
        </div>
      </div>

      <div className="home-actions">
        <Link to="/general" className="home-button">Explore News</Link>
      </div>

      <div className="about-section">
        <h2>About NewsNest</h2>
        <p>
          NewsNest is your trusted source for unbiased and accurate news.  
          We bring you the latest updates from verified sources, ensuring you get the truth without any distractions.  
          Our goal is to keep you informed in the fastest and most efficient way possible.  
        </p>
      </div>

      {/* Highlighted Note About NewsAPI Restrictions */}
      <div className="alert-box">
        <p><strong>⚠ Important:</strong> Currently, NewsNest fetches news exclusively for the USA due to NewsAPI's access limitations.</p>
      </div>
    </div>
  );
};

export default Home;

Home.defaultProps = {
    category : "home"
}
Home.propTypes = {
    category: PropTypes.string
}