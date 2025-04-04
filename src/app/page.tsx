import Image from "next/image";
import NavBar from "./components/Navbar/index";
import Carousel from "./components/Carrousel/index";
import Footer from "./components/Footer/index";
import HomeFeed from "./components/HomeFeed";
import Pagination from "./components/Pagination";
//import SidebarHighlights from "./components/SidebarHighlights/index";

export default function Home() {
  return (
    <>
    <NavBar />
    <Carousel />
    <HomeFeed />
    <Pagination />
    <Footer />
    </>
  );
}
