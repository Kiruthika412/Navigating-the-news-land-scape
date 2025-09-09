import React, { useContext } from 'react';
import '../styles/Hero.css';
import { GeneralContext } from '../context/GeneralContext';
import Spinner from 'react-bootstrap/Spinner';

const Hero = () => {
  const { topNews } = useContext(GeneralContext);

  return (
    <>
      {topNews.length > 5 ? (
        <div className="hero-container">

          {/* Featured Article */}
          <div
            className="hero-featured"
            onClick={() => window.open(topNews[1].url, '_blank')}
          >
            <img
              src={topNews[1].urlToImage || '/placeholder.jpg'}
              alt={topNews[1].title}
            />
            <div className="hero-featured-text">
              <h2>{topNews[1].title}</h2>
            </div>
          </div>

          {/* Side Articles */}
          <div className="hero-side-articles">
            {topNews.slice(2, 6).map((article, index) => (
              <div
                key={index}
                className="hero-article-card"
                onClick={() => window.open(article.url, '_blank')}
              >
                <img
                  src={article.urlToImage || '/placeholder.jpg'}
                  alt={article.title}
                />
                <p>{article.title}</p>
              </div>
            ))}
          </div>

        </div>
      ) : (
        <div className="hero-spinner">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      )}
    </>
  );
};

export default Hero;
