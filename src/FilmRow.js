import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {

  constructor(props) {
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleDetailsClick(film) {
    console.log("Fetching details for " + film.title)
  }

  render() {
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>

        <Fave />
      </div>
    )
  }
}

export default FilmRow