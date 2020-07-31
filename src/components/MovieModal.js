import React from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';

const MovieModal = ( {movie} ) => (
    <div>
        <Modal
            isOpen={movie.Title}
            // onRequestClose={props.handleClearSelectedMovie}
            contentLabel="Filme selecionado"
            closeTimeoutMS={200}
            className="movie-modal"
        >
            <h3 className="movie-modal__Title">{movie.Title}</h3>
            {
            <p className="movie-modal__body">{movie.Title}</p>
            }
            <button
                className="button"
                onClick={this.setRedirect('/')}
            >OK
            </button>
        </Modal>
    </div>
);

export default MovieModal;