import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import SanPhamXemNhieu from "./SanPhamXemNhieu";
import "./App.css";

function App() {
  const sotin = 10;
  return (
    <div className="container">
      <header></header>
      <nav>
        <Menu />
      </nav>
      <main>
        <article className="col-md-9">
          <Home />
        </article>
        <aside className="col-md-3">
          <SanPhamXemNhieu sotin={sotin} />
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
