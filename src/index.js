import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import NotFound from "./pages/404";
import SearchBar from "./api/search-api";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/laboratory" element={<App />} />
        <Route path="/laboratory/search" element={<Search />} />
        <Route path="/laboratory/something" element={<SearchBar />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
