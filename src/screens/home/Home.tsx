import About from "../about/About";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import Service from "../services/Service";
import Hero from "./components/hero/Hero";


export default function Home() {
  return(
    <>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <Footer />
    </>
  )
}