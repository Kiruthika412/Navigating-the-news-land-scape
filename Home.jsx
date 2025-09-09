import React from 'react';
import '../styles/Home.css';
import Hero from '../components/Hero';
import TopStories from '../components/TopStories';
import HomeArticles from '../components/HomeArticles';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <main className="home">
      <Hero />

      <section className="home-section top-stories-section">
        <TopStories />
      </section>

      <section className="home-section articles-section">
        <HomeArticles />
      </section>

      <section className="home-section newsletter-section">
        <NewsLetter />
      </section>
    </main>
  );
};

export default Home;
