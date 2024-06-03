import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import "./Home.css";
const Home = () => {
  return (
    <main className="home-container">
      <Hero />
      <Products />
      <Services />
      <Blog />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default Home;
