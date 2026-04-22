import { useState } from "react";
import Nav from "@/components/laReine/Nav";
import Hero from "@/components/laReine/Hero";
import About from "@/components/laReine/About";

import Collection from "@/components/laReine/Collection";
import Experience from "@/components/laReine/Experience";
import Booking from "@/components/laReine/Booking";
import Inspiration from "@/components/laReine/Inspiration";
import Footer from "@/components/laReine/Footer";

const Index = () => {
  const [preselectedDress, setPreselectedDress] = useState<string | null>(null);

  return (
    <main className="bg-ivory text-noir">
      <Nav />
      <Hero />
      <About />
      
      <Collection onSelectForFitting={setPreselectedDress} />
      <Experience />
      <Booking preselectedId={preselectedDress} />
      <Inspiration />
      <Footer />
    </main>
  );
};

export default Index;
