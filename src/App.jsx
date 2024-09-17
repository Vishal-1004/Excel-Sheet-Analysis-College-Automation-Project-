import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, PrivacyPolicy } from "./Pages";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-conditions" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
