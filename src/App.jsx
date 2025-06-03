import {
  NavBar,
  HeroSection,
  FeatureSection,
  ArticlesSection,
} from "./components";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="full-bleed wrapper">
        <HeroSection />
        <FeatureSection />
        <ArticlesSection />
      </main>
    </div>
  );
}

export default App;
