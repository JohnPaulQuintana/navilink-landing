import CommunitySection from "./CommunitySection";
import FaqSection from "./FaqSection";
import FeaturedSection from "./FeaturedSection";
import FinalCtaBanner from "./FinalCtaBanner";
import FloatingBlocks from "./FloatingBlocks";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-background">
      {/* BACKGROUND LAYER */}
      <FloatingBlocks />
      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <FeaturedSection />
        <CommunitySection />
        <FaqSection />
        <FinalCtaBanner />
        <Footer />
      </div>
    </section>
  );
}

export default App;
