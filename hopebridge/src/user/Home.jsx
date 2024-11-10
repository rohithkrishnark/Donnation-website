import React from "react";
import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap"
import "./Carosel.css"
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import Carouselcomponent from "./Carouselcomponent";
function Home() {
  const cardsData = [
    { img: "/card1.webp", title: "Support Education", path: "/donate" },
    { img: "/card2.jpg", title: "Feed Homeless", path: "/food" },
    { img: "/dog.jpg", title: "Feed A Stray Dog", path: "/dog" },
    { img: "/orphange.jpg", title: "Support A Orphange", path: "/orphandonnaition" }
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const projectsRef = useRef(null);  // Reference for the "Latest Projects" section

  useEffect(() => {
    // Check if the location state is set to show projects
    if (location.state && location.state.showProjects) {
      // Scroll to the projects section
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>  
      <Navbar />
      {/* <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="car1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Empowering Communities</h3>
            <p>Join us in making a difference, one project at a time.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="car5.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Bridging the Gap</h3>
            <p>Your support brings hope to those in need.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="car3.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Together We Can</h3>
            <p>Let's work together to create a brighter future.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <Carouselcomponent/>

      <div className=" d-flex container mt-5">
        <h1>About HopeBridge</h1>
        <div style={{ textAlign: "justify", marginLeft: "20px" }}>
          <p>
            Hopebridge is more than just a platform—it's a beacon of hope for those in need. Founded with a mission to bridge the gap between generous donors and communities in need, Hopebridge is committed to making a meaningful difference in the world.

            At Hopebridge, we believe that every contribution, no matter how small, can create a ripple of positive change. Our platform empowers individuals and organizations to come together to support causes that matter—whether it’s providing education to underprivileged children, offering healthcare to those without access, or supporting disaster relief efforts.

            Our approach is simple yet impactful. We ensure that your donations go directly to the causes you care about, with full transparency and accountability. By working with trusted partners and local organizations, we ensure that every donation is used effectively to create lasting change.

          </p>
        </div>



      </div>

      <div className="container">
        <h1 style={{ textAlign: "center" }}>Our Mission</h1>
        <div style={{ textAlign: "justify" }}>
          <p>At Hopebridge, our mission is to create a world where compassion and generosity unite to uplift those in need. We are dedicated to bridging the gap between those who have the means to give and those who require assistance, facilitating meaningful and lasting change in communities across the globe.

            We are committed to empowering underserved communities by providing the resources and opportunities necessary for them to thrive. Through targeted initiatives in education, healthcare, and social welfare, we aim to build a foundation for sustainable growth and development. We believe that by addressing the root causes of poverty and inequality, we can create pathways to a brighter future for all.

            Transparency and accountability are at the core of our mission. We ensure that every donation is directed toward impactful projects that bring real, measurable benefits to those we serve. By partnering with trusted local organizations, we maximize the effectiveness of our efforts, ensuring that every contribution makes a tangible difference in the lives of individuals and communities.

            Our mission extends beyond immediate relief—we strive to foster long-term resilience and self-sufficiency within the communities we support. By focusing on sustainable solutions and community-driven initiatives, we empower individuals to take control of their futures, breaking the cycle of poverty and dependency.

            At Hopebridge, we are building a global network of compassion, where each act of giving is a step toward a more just and equitable world. Together, we can create a bridge of hope that spans continents and cultures, connecting hearts and transforming lives.</p>
        </div>
      </div>
      {/* Latest Projects Section */}
      <div ref={projectsRef}>  {/* Scroll target */}
        <h1 style={{ textAlign: 'center' }}>Latest Projects</h1>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card" onClick={() => navigate(card.path)}>
              <img src={card.img} alt={card.title} className="card-image" />
              <h2 className="card-title" style={{ color: "#333" }}>{card.title}</h2>
            </div>
          ))}
        </div>
      </div>


      <Footer />

    </>
  );
}

export default Home;