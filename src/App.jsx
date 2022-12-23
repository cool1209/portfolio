import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
