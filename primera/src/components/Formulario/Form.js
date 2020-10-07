import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.cambioValor = this.cambioValor.bind(this);
    this.envioDatos = this.envioDatos.bind(this);
  }

  cambioValor(event) {
    this.setState({ value: event.target.value });
  }

  envioDatos(event) {
    alert('Nombre Enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Ingresar Nombre</h5>
            <form className="mt-5 ml-2 card-text" onSubmit={this.envioDatos}>
              <label >
                Nombre:
                <input type="text" className='ml-2' value={this.state.value} onChange={this.cambioValor} />
              </label>
              <input type="submit" className='ml-2 btn btn-success' value="Submit" />
            </form>
          </div>
        </div>
        <div className="card col">
          <div className="card-body bg-success p-5 text-center  text-white">
            <h5 className="card-title h1">{this.state.value}</h5>
          </div>
        </div>
        </div>
    )
  }
}

export default Form;
