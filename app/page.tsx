
import Features from "@/components/Services";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import React from "react";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Hero/>
    
    <Guide/>
    <Features/>
    <GetApp/>
    <Footer/>
    </> 
  );
}
