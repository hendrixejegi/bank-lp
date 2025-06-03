import {
  NavBar,
  HeroSection,
  FeatureSection,
  ArticlesSection,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
