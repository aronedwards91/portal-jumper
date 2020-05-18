import { h, Component } from "preact";
if (process.env.NODE_ENV === "development") {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  console.log("dev");
  require("preact/debug");
}
import Layout from "./Layout";
import Background from "./Background";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <link
          href="https://fonts.googleapis.com/css?family=Sulphur+Point:400,700&display=swap"
          rel="stylesheet"
        />
        <Background />
        <Layout />
      </div>
    );
  }
}
