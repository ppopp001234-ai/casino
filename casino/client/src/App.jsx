import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 其他遊戲模組路由 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
