import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  url = "%PUBLIC_URL%/";
  data = null;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://www.cuos.com.ar/primer-react/get_products")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="fondo">
          <div className="container ">
            <div className="row fondo">
              {items.map((item) => (
                <div className="card col m-3" key={item.producto_id}>
                  {/* src={require(this.url + item.producto_imagen)} */}
                  {/* {`../../../assets/images/${item.producto_imagen}`} */}
                  <img
                    src={process.env.PUBLIC_URL + item.producto_imagen}
                    alt=""
                    className="card-img-top size"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.producto_nombre}</h5>
                    <p className="card-text">{item.producto_descripcion}</p>
                    <br></br>
                    <br></br>
                    <label>${item.producto_precio}</label>
                    <hr></hr>
                    <a href="#" className="btn btn-primary">
                      Agregar al carrito
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
