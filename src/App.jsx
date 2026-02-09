import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [persona, setPersona] = useState(null);

  const handleSelectPersona = (selection) => {
    setPersona(selection);
    const section = document.getElementById("services");
    if (section) {
      setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onSelectPersona={handleSelectPersona} persona={persona} />
              <Services persona={persona} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
