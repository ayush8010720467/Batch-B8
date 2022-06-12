import logo from "./logo.svg";
import "./App.css";
import React from "react";
import AboutUs from "./Module/AboutUs";
import Section from "./Module/Section";
import Container from "./Module/Container";

function App() {
  let url = "https://avatar.githubusercontent.com/u/27486605?v=4";
  // let url = "";
  return (
    // <React.Fragment>
    //   <p>Hi</p>
    //   <></>
    //   <div className="App" style={{ backgroundColor: "yellow" }}>
    //     <header className="App-header">
    //       {url ? (
    //         <img
    //           src={url.includes("avatars") ? url : logo}
    //           className="App-logo"
    //           alt="logo"
    //         />
    //       ) : (
    //         <p>No Content</p>
    //       )}
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // </React.Fragment>
    <>
      <div className="AboutMe">
        {/* <AboutUs a="a" b="b" /> */}
        <Section
          heading="About Us"
          desc="I am Ayush Katiyar working with Mindtickle."
        />
        <Section heading="Contact Us" desc="ayushkatiyar@gmail.com" />
        <Section heading="Home" desc="This is the home section" />
      </div>
      <Container>
        <AboutUs />
      </Container>
    </>
  );
}

// new AboutUs({
//   a: 'a',
//   b: 'b',
//   className: "AboutMe"
// });
export default App;
