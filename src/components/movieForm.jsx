import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button className="btn btn-primary btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MovieForm;
