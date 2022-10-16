import React from "react";
import { NavBar } from "../NavBar";
import { Home } from "../Home";
import { QuotationDetail } from "../QuotationDetail";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="hfeed site" id="page">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quotationDetail" element={<QuotationDetail />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
};
