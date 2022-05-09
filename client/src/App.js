import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//ACE IMPORTS
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

//React Textarea Code Editor Import
import CodeEditor from "@uiw/react-textarea-code-editor";

function App() {
  function aceChange(newValue) {
    console.log("change", newValue);
  }
  const [reactCodeEditor, setReactCodeEditor] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <div classNameName="App">
      <Header />
      <Nav />

      <main>
        <div className="codeRow" id="codePenRow">
          <aside>
            <h2>Codepen Embed</h2>
            <li>code is not editable unless on a PRO membership - $96/year</li>
            <li>Solution is using html and javascript to embed</li>
            <li>Offers HTML, CSS, and JS editting</li>
          </aside>

          <div className="contents">
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
        <div className="codeRow" id="codeSandboxRow">
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
              <header>Code Sandbox</header>
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

        <div className="codeRow" id="reactLiveCodeRow">
          <aside>
            <h2>
              <a
                href="https://uiwjs.github.io/react-textarea-code-editor/"
                target="_blank"
              >
                React Live Code Editor
              </a>
            </h2>
            <li>Open source</li>
            <li>simple to use</li>
            <li>note 3 on this attempt</li>
          </aside>

          <div className="contents">
            <section className="codeBlock">
              <header>React Live Code Editor</header>
              <CodeEditor
                value={reactCodeEditor}
                // data-color-mode="dark"
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => setReactCodeEditor(evn.target.value)}
                padding={15}
                style={{
                  fontSize: 12,
                  backgroundColor: "#f5f5f5",
                  fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                }}
              />
              <p>
                A simple code editor with syntax highlighting. This library aims
                to provide a simple code editor with syntax highlighting support
                without any of the extra features, perfect for simple embeds and
                forms where users can submit code.
              </p>
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

// ACE ATTEMPT
// <div className="codeRow">
//           <aside>
//             <h2>Ace</h2>
//             <li>open source</li>
//             <li>note 2 on this attempt</li>
//             <li>note 3 on this attempt</li>
//           </aside>

//           <div className="contents">
//             {/* CARD TEMPLATE */}
//             {/* <section className="card">
//               <header>Kitten for sale</header>
//               <img src="http://placekitten.com/200/300" alt="cute kitten" />
//               <p>Price: $300</p>
//             </section> */}
//             <section className="codeBlock">
//               <header>Header</header>
//               render(
//               <AceEditor
//                 mode="java"
//                 theme="github"
//                 onChange={aceChange}
//                 name="aceEditor"
//                 editorProps={{ $blockScrolling: true }}
//                 setOptions={{
//                   enableBasicAutocompletion: true,
//                   enableLiveAutocompletion: true,
//                   enableSnippets: true,
//                 }}
//               />
//               , document.getElementById("aceEditor") );
//               <p>Explanation of code</p>
//             </section>
//           </div>
//         </div>
