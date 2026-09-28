import react from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import BlogList from "../Components/BlogList";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <BlogList/>
            <Footer/>
        </>
    )    
}

export default Home;