import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  const handleScroll = (event) => {
    console.log(event);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{ overflow: "scroll", height: "100%", overflowX: "hidden" }}
    >
      <Hero />
      <About />
    </div>
  );
}

export default App;
