import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { NewsItem } from "./components/NewsItem/NewsItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="news/:id" element={<NewsItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
