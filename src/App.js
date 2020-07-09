import React from "react";
import "./App.css";
import { NavBar, TabBar, Footer } from "./components/Index";

function App() {
  return (
    <div className="container">
      <NavBar />
      <TabBar />
      <Footer />
    </div>
  );
}

export default App;