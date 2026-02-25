import React from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import Hero from "../components/HomePageCmponents/Hero";
import AboutUsSection from "../components/AboutUsSectioncomponents/AboutUsSection";
import Card from "../components/productCardcomponents/card";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-56">
      <Hero />
      <AboutUsSection />
      <Card/>
    </div>
  );
};

export default HomePage;
