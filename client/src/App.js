import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <header>
        <h1>Live Code Editor Sandbox!</h1>
        <p>
          Below are my active attempts to develop a live code editor I can reuse
        </p>
      </header>

      <nav>
        <a href="#">Nav Link 1</a>
        <a href="#">Nav Link 2</a>
      </nav>

      <main>
        <div className="codeRow">
          <aside>
            <h2>Live Code Editor Section Title</h2>
            <li>note 1 on this attempt</li>
            <li>note 2 on this attempt</li>
            <li>note 3 on this attempt</li>
          </aside>

          <div className="contents">
            {/* CARD TEMPLATE */}
            {/* <section className="card">
              <header>Kitten for sale</header>
              <img src="http://placekitten.com/200/300" alt="cute kitten" />
              <p>Price: $300</p>
            </section> */}
          </div>
        </div>
        <div className="codeRow">
          <aside>
            <h2>Live Code Editor Section Title</h2>
            <li>note 1 on this attempt</li>
            <li>note 2 on this attempt</li>
            <li>note 3 on this attempt</li>
          </aside>

          <div className="contents">
            {/* CARD TEMPLATE */}
            {/* <section className="card">
              <header>Kitten for sale</header>
              <img src="http://placekitten.com/200/300" alt="cute kitten" />
              <p>Price: $300</p>
            </section> */}
          </div>
        </div>
      </main>

      <footer>
        <h3>End of the line!</h3>
      </footer>
    </div>
  );
}

export default App;
