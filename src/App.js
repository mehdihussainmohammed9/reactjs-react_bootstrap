import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      dataSource: [],

      active: false
    };
  }
  load() {
    fetch(
      "https://pixabay.com/api/?key=17116025-59af6bf08512e84d50c227107&q=yellow+flowers&image_type=photo&pretty=true"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ dataSource: res.hits });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div className="container-fluid">
        <button onClick={() => this.load()}>click</button>

        <div className="row">
          {this.state.dataSource.map((v, i) => {
            return (
              <div className="col-md-4">
                <div
                  className="App"
                  onClick={() => {
                    alert("sdf");
                  }}
                >
                  <div className="contacts">
                    <h5>ID: {v.id}</h5>
                    <p>Type: {v.type}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
