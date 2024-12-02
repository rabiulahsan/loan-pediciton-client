import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import FormSection from "./Components/FormSection";
import Navbar from "./Components/Navbar";
import TitleBar from "./Components/TitleBar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TitleBar></TitleBar>
      <Banner></Banner>
      <FormSection></FormSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
