import React, { Component } from 'react';
import Api from './Api';
import Header from './components/Header';
import Filter from './components/Filter';
import Movies from './components/Movies';
// import MovieModal from './components/MovieModal';
import './styles/styles.scss';

class App extends Component {

  state = {
    movies: [],
    apiGet: undefined
  }

  handleFilter = (name, year) => {
      if (!name) {
          return 'O campo "Nome" é obrigatório!';
      }
      let filter = '?i=tt3896198&apikey=d06d0504&t='+ name;
      if (year) {
        filter += '&y=' + year;
      }
      
      this.setState({ apiGet: filter });
      this.renderMovies();
  };

  handleClearSelectedMovie = () => {
      this.setState (() => ({ apiGet: undefined }));
  };

  renderMovies = async() => {
    const { apiGet } = this.state;
    const response = await Api.get(apiGet);
    let tmpArray = [];
    tmpArray.push(response.data);
    this.setState({ movies: tmpArray });
  }

  async componentDidMount() {
    const { apiGet } = this.state;
    if (apiGet) {
      this.renderMovies();
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {
          <Header />
        }
        <div  className="container">
        {
          <Filter handleFilter={this.handleFilter} />
        }
          <div className="widget">
          {
            <Movies movies={movies}/>
          }
          </div>
        </div>
        {/* {
          <MovieModal
              selectedMovie={this.props.movieChoose}
              handleClearSelectedMovie={this.handleClearSelectedMovie}
          />
        } */}
      </div>
    );
  };
};


export default (App);
