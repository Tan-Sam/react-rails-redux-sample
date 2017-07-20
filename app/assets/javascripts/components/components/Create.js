import React, { Component } from 'react';

/**
 * Create
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function

   constructor(props){
     super(props);

     this.state = {
       title: "",
       price: 0
     };
   }


  onChange = (e) => {
    // debugger;
    let state = this.state;

    if(e.target.name === "name") {
      state.title = e.target.value;
    }

    if(e.target.name === "price") {
      state.price = e.target.value;
    }

    this.setState(state);
  }

  onClick = (e) => {
    debugger;
    this.props.createProduct(this.state);

    this.setState({
      title: "",
      price: 0
    });


  }


  render() {
    return (
      <section className="row create">
        <div className="col-md-2 name">
          <div className="form-group">
            <input type="text"
                   name="name"
                   autofocus="true"
                   placeholder="Name"
                   className="form-control"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="col-md-2 price">
          <div className="form-group">
            <input type="number"
                   name="price"
                   min={0}
                   placeholder="Price"
                   className="form-control"
                   onChange={this.onChange}/>
          </div>
        </div>
        <div className="col-md-2 createProduct">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Create</button>
        </div>
      </section>
    );
  }
}

export default Create;
