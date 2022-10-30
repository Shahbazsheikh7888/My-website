import Head from "next/head";
import Navbar from "../components/Navbar";
import Home1 from "../components/Home1";

import Aboutme from "../components/Aboutme";
import Myskills from "../components/Myskills";
import Projects from "../components/Projects";
import Aboutus from "../components/Resume";

import Footer from "../components/Footer";
import Contactme from "../components/Contactme";

export default function Home() {
  return (
    <>
    <Head>
      <title>Shahbaz Sheikh</title>
      <meta name="description" content="My portfolio" />
      <link rel="icon" href="logo.png" />
    </Head>
    <Navbar></Navbar>
    <Home1></Home1>
    <Aboutme></Aboutme>
   
    <Myskills></Myskills>
    <Projects></Projects>
    <Aboutus></Aboutus>
    
    <Contactme></Contactme>
    <Footer></Footer>
    </>
    
  );
}
