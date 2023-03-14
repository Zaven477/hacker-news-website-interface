import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage/NewsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
