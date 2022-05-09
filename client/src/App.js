import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const ace = function (items) {
    var x = "All this is syntax highlighted";
    return x;
  };
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");

  return (
    <div classNameName="App">
      <Header />
      <Nav />

      <main>
        <div className="codeRow">
          <aside>
            <h2>Codepen Embed</h2>
            <li>code is not editable unless on a PRO membership - $96/year</li>
            <li>Solution is using html and javascript to embed</li>
            <li>Offers HTML, CSS, and JS editting</li>
          </aside>

          <div className="contents">
            {/* CARD TEMPLATE */}
            {/* <section className="card">
              <header>Kitten for sale</header>
              <img src="http://placekitten.com/200/300" alt="cute kitten" />
              <p>Price: $300</p>
            </section> */}
            <section className="codeBlock">
              <header>Diagonal Flexbox Example</header>
              <p
                class="codepen"
                data-height="300"
                data-default-tab="html,result"
                data-slug-hash="WNMQPBZ"
                data-user="alexngeis"
                style={{
                  height: "300px",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid",
                  margin: "1em 0",
                  padding: "1em",
                  width: "100%",
                }}
              >
                <span>
                  See the Pen{" "}
                  <a href="https://codepen.io/alexngeis/pen/WNMQPBZ">
                    flexbox diagonal shifty demo prototype thingy
                  </a>{" "}
                  by Alex Geis (
                  <a href="https://codepen.io/alexngeis">@alexngeis</a>) on{" "}
                  <a href="https://codepen.io">CodePen</a>.
                </span>
              </p>
              <p>
                As you can see above, the embed does not remain active for long
                and turns into this hyperlink.
              </p>
            </section>
          </div>
        </div>
        <div className="codeRow">
          <aside>
            <h2>Code Sandbox</h2>
            <li>using iframe rather than html/javascript</li>
            <li>React example</li>
            <li>Offers editting of App.js file</li>
          </aside>

          <div className="contents">
            {/* CARD TEMPLATE */}
            {/* <section className="card">
              <header>Kitten for sale</header>
              <img src="http://placekitten.com/200/300" alt="cute kitten" />
              <p>Price: $300</p>
            </section> */}
            <section className="codeBlock">
              <header>Header</header>
              <iframe
                src="https://codesandbox.io/embed/nameless-river-y10xmj?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
                style={{
                  width: "100%",
                  height: "500px",
                  border: "0",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
                title="nameless-river-y10xmj"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
              <p>Explanation of code</p>
            </section>
          </div>
        </div>
        <div className="codeRow">
          <aside>
            <h2>Ace</h2>
            <li>open source</li>
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
            <section className="codeBlock">
              <header>Header</header>
              <div id="editor"></div>
              <p>Explanation of code</p>
            </section>
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
            <section className="codeBlock">
              <header>Header</header>

              <p>Explanation of code</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
