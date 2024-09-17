import { Footer, Navbar } from "./Components";
import { Home } from "./Pages";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Home />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
