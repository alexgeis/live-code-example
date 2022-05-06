import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <header>
        <h1>Welcome to the store!</h1>
        <p>Add some box styling to the product cards to make them POP!</p>
      </header>

      <nav>
        <a href="#">Camera</a>
        <a href="#">Tablet</a>
        <a href="#">Toilet Paper</a>
        <a href="#">Wooden Spoons</a>
      </nav>

      <main>
        <aside>
          <h2>The product cards would look better if...</h2>
          <li>the corners were rounded out</li>
          <li>there was a shadow</li>
          <li>they were rotated slightly</li>
        </aside>
        <div className="products">
          <section className="card">
            <header>Camera</header>
            <img src="./assets/images/camera.jpg" alt="black camera" />
            <p>Price: $300</p>
          </section>
          <section className="card">
            <header>Tablet</header>
            <img src="./assets/images/tablet.jpg" alt="tablet held in hands" />
            <p>Price: $150</p>
          </section>
          <section className="card">
            <header>Toilet Paper</header>
            <img
              src="./assets/images/toilet-paper.jpg"
              alt="rolls of toilet paper in a basket"
            />
            <p>Price: $30</p>
          </section>
          <section className="card">
            <header>Wooden Spoons</header>
            <img
              src="./assets/images/wooden-spoons.jpg"
              alt="4 wooden spoons with different seasonings"
            />
            <p>Price: $10</p>
          </section>
        </div>
      </main>

      <footer>
        <h3>
          Open Chrome DevTools --> Toggle device toolbar --> Resize the browser
          window!
        </h3>
      </footer>
    </div>
  );
}

export default App;
