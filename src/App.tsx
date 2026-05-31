import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TechSection from "./components/TechSection";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="flex min-h-[calc(100dvh-6rem)] flex-col sm:min-h-[calc(100dvh-6.625rem)]">
        <Hero />
      </div>
      <TechSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
