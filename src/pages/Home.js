import React from "react";
import HomeCountries from "../components/HomeCountries";
import HeroHome from "../components/HeroHome";
import HomeUniversities from "../components/HomeUniversities";
import HomeConsultants from "../components/HomeConsultants";
import ArticlesSection from "../components/HomeArticles";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeContact from "../components/HomeContact";

function Home() {
  return (
    <div>
      <HeroHome />
      <HomeCountries />
      <HomeUniversities />
      <HomeConsultants />
      <HomeTestimonials />
      <ArticlesSection />
      <HomeContact/>
    </div>
  );
}

export default Home;
