import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/footer";
// import Form from "./components/Formulario/Form";

class App extends Component {
  async componentDidMount() {
    fetch("https://www.cuos.com.ar/primer-react/get_example")
      .then((response) => response.json())
      .then(
        (data) =>
          console.log(data) && this.setState({ totalReactPackages: data.total })
      );
  }

  async componentDidMount2() {
    const requestOptions = {
      method: "POST",
    };

    fetch("https://www.cuos.com.ar/primer-react/post_example", requestOptions)
      .then((response) => response.json())
      .then(
        (data) =>
          console.log(data) && this.setState({ totalReactPackages: data.total })
      );
  }
  render() {
    return (
      <div className="fondo">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
