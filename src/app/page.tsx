import Image from "next/image";
import NavBar from "./components/Navbar/index";
import Carousel from "./components/Carrousel/index";
import Footer from "./components/Footer/index";

export default function Home() {
  return (
    <>
    <NavBar />
    <Carousel />
    <Footer />
    </>
  );
}
