import { NavBar, HeroSection } from "./components";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="full-bleed wrapper">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
