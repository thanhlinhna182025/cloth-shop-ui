import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Categlories from "../components/Categlories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Slider />
      <Categlories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
