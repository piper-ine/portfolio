import Header from "./components/Header";
import Hero from "./components/Hero";
import TechSection from "./components/TechSection";

const App = () => {
  return (
    <div className="wrapper">
      <div className="flex min-h-dvh flex-col">
        <Header />
        <Hero />
      </div>
      <TechSection />
    </div>
  );
}

export default App;
